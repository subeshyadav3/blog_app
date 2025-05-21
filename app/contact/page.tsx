
import { Mail, Phone, MapPin, Clock } from 'lucide-react'


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-12">We'd love to hear from you. Get in touch with the TechBlog team.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    
            <div className="col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@techblog.com" className="text-gray-600 hover:text-black">
                        info@techblog.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+11234567890" className="text-gray-600 hover:text-black">
                        +977 9876543210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-gray-600">
                        Bagbazar<br />
                        Kathmandu<br />
                        Nepal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-gray-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="col-span-1 md:col-span-2">
              <form className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Message subject"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

         
        </div>
      </main>
   
    </div>
  )
}
