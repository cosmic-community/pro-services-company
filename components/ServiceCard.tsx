import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col">
        {service.metadata.icon && (
          <div className="mb-4">
            <img 
              src={`${service.metadata.icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={service.metadata.service_name}
              width="60"
              height="60"
              className="rounded-lg"
            />
          </div>
        )}
        
        <div className="flex-grow">
          {service.metadata.category && (
            <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              {service.metadata.category.value}
            </span>
          )}
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {service.metadata.service_name}
          </h3>
          
          <div 
            className="text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: service.metadata.description }}
          />
        </div>
        
        {service.metadata.pricing && (
          <p className="text-primary-600 font-semibold text-lg mt-4">
            {service.metadata.pricing}
          </p>
        )}
        
        <div className="mt-4">
          <span className="text-primary-600 font-semibold hover:text-primary-700">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  )
}