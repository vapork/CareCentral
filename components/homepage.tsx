'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaComments, FaTimes, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import React from 'react'

const colors = {
  primary: "bg-red-600 text-white",
  secondary: "bg-white text-red-600",
  accent: "bg-blue-500 text-white",
  muted: "bg-gray-100 text-gray-800",
};

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2; // Ensure this matches the number of slides
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

  useEffect(() => {
    if (isChatOpen && responses.length === 0) {
      setResponses(["Bot: How can I help you today?"]);
    }
  }, [isChatOpen, responses.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNextSlide = () => {
    console.log('Next Slide');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePreviousSlide = () => {
    console.log('Previous Slide');
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setLoading(true);
      setResponses((prev) => [...prev, `You: ${message}`]);
      setMessage(''); // Clear the input after sending

      // Simulate a database query with a timeout
      setTimeout(() => {
        setLoading(false);
        setResponses((prev) => [...prev, "Bot: This is a generic response."]);
      }, 2000); // 2-second delay
    }
  };

  const toggleBenefit = (benefit: string) => {
    setExpandedBenefit(expandedBenefit === benefit ? null : benefit);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`${colors.primary} py-4 fixed w-full z-50`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="CareCentral Logo" width={50} height={50} className="mr-2" />
            <span className="text-2xl font-bold">CareCentral</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" className={`${colors.secondary} border-red-600`}>Log In</Button>
            <Button className={colors.accent}>Sign Up</Button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className={`${colors.primary} py-4`}>
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#benefits" className="hover:underline">Benefits</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Button variant="outline" className={`${colors.secondary} border-red-600`} w-full>Log In</Button>
            <Button className={`${colors.accent} w-full`}>Sign Up</Button>
          </div>
        </div>
      )}

      <main className="flex-grow mt-16">
        <section className="relative w-full h-96">
          <div className="relative w-full h-full">
            <Image
              src={`/carousel${currentSlide + 1}.jpg`}
              alt={`CareCentral Image ${currentSlide + 1}`}
              fill // Replaces layout="fill"
              style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Healthcare Aides and Agencies</h1>
              <p className="text-xl md:text-2xl">Streamline your hiring process with CareCentral</p>
            </div>
            <button onClick={handlePreviousSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full z-20">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full z-20">
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-lg w-full h-auto" width={500} height={300} />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 mb-6">
                At CareCentral, we are dedicated to connecting healthcare aides and agencies to streamline the hiring process. Our platform is designed to make finding the right match easy and efficient, ensuring that both aides and agencies can focus on what truly matters: providing excellent care.
              </p>
              <p className="text-gray-600">
                Our team is passionate about healthcare and technology, and we are committed to creating solutions that improve the lives of healthcare professionals and the people they serve. Join us on our mission to revolutionize the healthcare hiring process.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className={`${colors.muted} py-12 md:py-24`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Reduced Administrative Burden",
                  content: "Streamline hiring processes and reduce paperwork for both agencies and caregivers."
                },
                {
                  title: "Improved Matching",
                  content: "Connect the right caregivers with the right opportunities using our advanced matching algorithm."
                },
                {
                  title: "Enhanced Compliance",
                  content: "Ensure all caregivers meet state-specific requirements and maintain up-to-date certifications."
                },
                {
                  title: "Increased Efficiency",
                  content: "Optimize scheduling, time tracking, and payroll processes for smoother operations."
                }
              ].map((benefit, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    className="flex items-center justify-between w-full p-4 text-left"
                    onClick={() => toggleBenefit(benefit.title)}
                  >
                    <div className="flex items-center">
                      {expandedBenefit === benefit.title ? (
                        <FaChevronDown className="mr-2 text-primary" />
                      ) : (
                        <FaChevronRight className="mr-2 text-primary" />
                      )}
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    </div>
                  </button>
                  {expandedBenefit === benefit.title && (
                    <div className="p-4 bg-gray-100">
                      <p>{benefit.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Features Section */}
        <section id="features" className="py-12 md:py-24">
          <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">Caregiver Onboarding</h3>
                <p className="text-gray-700">Streamlined profile creation, subscription to job alerts, and compliance with state-specific requirements.</p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">Agency Management</h3>
                <p className="text-gray-700">Efficient agency onboarding, job posting, and caregiver search functionality.</p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
                <p className="text-gray-700">Automated job matching, shift management, and performance tracking for optimal care delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Staffing?</h2>
            <p className="text-xl mb-8">Join CareCentral today and experience the future of healthcare aide recruitment.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className={colors.primary}>Sign Up as an Agency</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className={`${colors.secondary} border-red-600`}>Join as a Caregiver</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg mb-4">We would love to hear from you! Reach out to us through any of the platforms below.</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} className="text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} className="text-blue-700 hover:text-blue-900" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} className="text-blue-400 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${colors.primary} py-8`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CareCentral</h3>
              <p>Connecting healthcare aides and agencies for better care delivery.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#benefits" className="hover:underline">Benefits</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-2">Stay updated with our latest news and offers.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="flex-grow" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CareCentral. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Button and Window */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        </button>
        {isChatOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mt-2 w-80 h-80 flex flex-col justify-between">
            <div className="overflow-y-auto flex-grow mb-4">
              {responses.map((response, index) => (
                <div key={index} className={`mb-2 p-2 rounded-lg ${response.startsWith('You:') ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                  {response}
                </div>
              ))}
              {loading && (
                <div className="flex justify-center items-center">
                  <AiOutlineLoading3Quarters className="animate-spin text-blue-500" size={24} />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-grow border rounded p-2"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSendMessage}
                disabled={loading} // Disable button while loading
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}