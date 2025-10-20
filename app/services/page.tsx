import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services | Professional Services Showcase',
  description: 'Explore our comprehensive range of professional services',
}

export default async function ServicesPage() {
  const services = await getServices()

  // Group services by category
  const servicesByCategory: Record<string, typeof services> = {}
  
  services.forEach(service => {
    const category = service.metadata.category?.value || 'Other'
    if (!servicesByCategory[category]) {
      servicesByCategory[category] = []
    }
    servicesByCategory[category].push(service)
  })

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to help your business thrive in the digital age.
          </p>
        </div>

        {services.length > 0 ? (
          Object.keys(servicesByCategory).map(category => {
            const categoryServices = servicesByCategory[category]
            
            if (!categoryServices || categoryServices.length === 0) {
              return null
            }

            return (
              <div key={category} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )
          })
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}