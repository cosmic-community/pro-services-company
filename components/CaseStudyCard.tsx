import Link from 'next/link'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col">
        {caseStudy.metadata.featured_image && (
          <div className="h-64 overflow-hidden">
            <img 
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_title}
              width="400"
              height="300"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {caseStudy.metadata.project_title}
          </h3>
          
          {caseStudy.metadata.client_name && (
            <p className="text-primary-600 font-semibold mb-4">
              {caseStudy.metadata.client_name}
            </p>
          )}
          
          <div 
            className="text-gray-600 mb-4 line-clamp-3 flex-grow"
            dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
          />
          
          <div className="mt-4">
            <span className="text-primary-600 font-semibold hover:text-primary-700">
              Read Case Study →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}