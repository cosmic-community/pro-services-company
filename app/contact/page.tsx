import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Professional Services',
  description: 'Get in touch with our team to discuss how we can help your business grow'
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-primary-600 text-white rounded-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-primary-100 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-primary-100">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-100">info@company.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-primary-100">
                      123 Business Street<br />
                      Suite 100<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-500">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <p className="text-primary-100">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}