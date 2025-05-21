"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Github, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"

function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
     
          <div>
            <h3 className="font-bold text-lg mb-4">About TechBlog</h3>
            <p className="text-gray-600 mb-4">
              TechBlog is your go-to source for the latest in technology news, tutorials, and insights from industry
              experts. We're passionate about sharing knowledge and fostering a community of tech enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-800" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-gray-800" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-800" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@techblog.com" className="text-gray-500 hover:text-gray-800" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-black flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-black flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/category/web-development"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Web Development
              </Link>
              <Link
                href="/category/ai"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Artificial Intelligence
              </Link>
              <Link
                href="/category/cloud"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Cloud Computing
              </Link>
              <Link
                href="/category/cybersecurity"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Cybersecurity
              </Link>
              <Link
                href="/category/mobile"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Mobile Development
              </Link>
              <Link
                href="/category/data-science"
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                Data Science
              </Link>
            </div>
          </div>

 
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest articles, tutorials, and tech news.</p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>


        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} TechBlog. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy-policy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-black">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-black">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="hover:text-black">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
