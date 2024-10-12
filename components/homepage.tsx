"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Menu, X, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

const colors = {
  primary: "bg-red-600 text-white",
  secondary: "bg-white text-red-600",
  accent: "bg-blue-500 text-white",
  muted: "bg-gray-100 text-gray-800",
};

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/carousel1.jpg', '/carousel2.jpg'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [nextImage]); // Add nextImage if it's used inside the effect

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`${colors.primary} py-4`}>
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

      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative">
            <div className="w-full h-full">
              <Image
                src={images[currentIndex]}
                alt={`CareCentral Image ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Connecting Healthcare Aides and Agencies</h1>
                <p className="text-xl md:text-2xl">Streamline your hiring process with CareCentral</p>
              </div>
              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full z-20">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white p-2 rounded-full z-20">
                <ChevronRightIcon size={24} />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <Image src="/about-image.jpg" alt="About CareCentral" width={300} height={200} className="w-full md:w-1/2 rounded-md mb-4 md:mb-0 md:mr-4" />
              <p className="text-lg md:text-xl">
                CareCentral is dedicated to connecting healthcare aides with agencies to ensure the best care delivery. Our platform streamlines the hiring process, making it easier for agencies to find the right caregivers.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Caregiver Onboarding</h3>
                  <p>Streamlined profile creation, subscription to job alerts, and compliance with state-specific requirements.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Agency Management</h3>
                  <p>Efficient agency onboarding, job posting, and caregiver search functionality.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
                  <p>Automated job matching, shift management, and performance tracking for optimal care delivery.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className={`${colors.muted} py-12 md:py-24`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Administrative Burden</h3>
                  <p>Streamline hiring processes and reduce paperwork for both agencies and caregivers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improved Matching</h3>
                  <p>Connect the right caregivers with the right opportunities using our advanced matching algorithm.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enhanced Compliance</h3>
                  <p>Ensure all caregivers meet state-specific requirements and maintain up-to-date certifications.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChevronRight className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
                  <p>Optimize scheduling, time tracking, and payroll processes for smoother operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Staffing?</h2>
            <p className="text-xl mb-8">Join CareCentral today and experience the future of healthcare aide recruitment.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className={colors.primary}>Sign Up as an Agency</Button>
              <Button size="lg" variant="outline" className={`${colors.secondary} border-red-600`}>Join as a Caregiver</Button>
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
    </div>
  );
}
