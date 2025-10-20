// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/services"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          ← Back to Services
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {service.metadata.icon && (
            <div className="h-64 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <img 
                src={`${service.metadata.icon.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={service.metadata.service_name}
                width="200"
                height="200"
                className="rounded-lg"
              />
            </div>
          )}

          <div className="p-8">
            <div className="mb-6">
              {service.metadata.category && (
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {service.metadata.category.value}
                </span>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {service.metadata.service_name}
              </h1>
              {service.metadata.pricing && (
                <p className="text-2xl font-semibold text-primary-600">
                  {service.metadata.pricing}
                </p>
              )}
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.metadata.description }}
            />

            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link
                href="/team"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}