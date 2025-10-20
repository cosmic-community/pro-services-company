// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Service } from '@/types'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const relatedService = typeof caseStudy.metadata.related_service === 'object' 
    ? caseStudy.metadata.related_service as Service
    : null

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/case-studies"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          ← Back to Case Studies
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {caseStudy.metadata.featured_image && (
            <div className="h-96 overflow-hidden">
              <img 
                src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={caseStudy.metadata.project_title}
                width="1200"
                height="600"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudy.metadata.project_title}
            </h1>
            
            {caseStudy.metadata.client_name && (
              <p className="text-xl text-gray-600 mb-8">
                Client: {caseStudy.metadata.client_name}
              </p>
            )}

            {relatedService && (
              <div className="mb-8">
                <Link 
                  href={`/services/${relatedService.slug}`}
                  className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-200 transition-colors"
                >
                  {relatedService.metadata.service_name}
                </Link>
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
                />
              </div>

              {caseStudy.metadata.results && (
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results</h2>
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                  />
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/services"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}