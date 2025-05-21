import { Award, Users, BookOpen, Zap } from "lucide-react"


export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About TechBlog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the tech community with insightful content, tutorials, and the latest industry news since 2015.
            </p>
          </div>


          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  TechBlog was founded in 2015 by a group of tech enthusiasts who saw the need for accessible,
                  high-quality content that bridges the gap between complex technical concepts and everyday users.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small passion project has grown into a trusted platform with over 1 million monthly
                  readers from around the globe. Our commitment to accuracy, clarity, and staying at the forefront of
                  technological advancements has made us a go-to resource for developers, IT professionals, and tech
                  enthusiasts alike.
                </p>
                <p className="text-gray-600">
                  Today, our team of writers, editors, and industry experts work tirelessly to bring you the most
                  relevant and insightful content across various technology domains.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Company history image would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-gray-50 p-8 rounded-lg mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              To democratize technology knowledge by creating content that educates, inspires, and empowers individuals
              to harness the full potential of technology in their personal and professional lives.
            </p>
          </div>


          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">TechBlog by the Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">1M+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">5,000+</div>
                <div className="text-gray-600">Published Articles</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">190+</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
            </div>
          </div>


          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every piece of content we publish, ensuring accuracy, clarity, and value
                    for our readers.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-600">
                    We believe in the power of community and foster an environment where knowledge sharing and
                    collaboration thrive.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <BookOpen className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">
                    We are committed to lifelong learning and making complex technical concepts accessible to everyone.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Zap className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace innovation and are always exploring new technologies and ideas to share with our
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Founder & Editor-in-Chief</p>
                <p className="text-sm text-gray-500">
                  Former tech journalist with over 15 years of experience in the industry.
                </p>
              </div>


              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Michael Chen</h3>
                <p className="text-gray-600 mb-2">Technical Director</p>
                <p className="text-sm text-gray-500">Full-stack developer and cloud architecture specialist.</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Priya Patel</h3>
                <p className="text-gray-600 mb-2">Content Strategist</p>
                <p className="text-sm text-gray-500">Specializes in AI, machine learning, and data science topics.</p>
              </div>


              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <div className="flex items-center justify-center h-full">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">David Wilson</h3>
                <p className="text-gray-600 mb-2">Community Manager</p>
                <p className="text-sm text-gray-500">Builds and nurtures our growing community of tech enthusiasts.</p>
              </div>
            </div>
          </div>


          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of our growing community of tech enthusiasts. Subscribe to our newsletter, follow us on social
              media, or contribute your expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition-colors"
              >
                Write for Us
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
