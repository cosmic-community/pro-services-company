import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Client Testimonials | Professional Services Showcase',
  description: 'Read what our clients have to say about working with us',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear directly from our satisfied clients about their experience working with us.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No testimonials available at this time.</p>
          </div>
        )}
      </div>
    </div>
  )
}