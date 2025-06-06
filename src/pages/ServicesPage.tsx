
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CircuitBackground from '@/components/CircuitBackground';
import ServicesHero from '@/components/ServicesHero';
import ServiceTiles from '@/components/ServiceTiles';
import FintechServicesShowcase from '@/components/FintechServicesShowcase';
import Features from '@/components/Features';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet';

const ServicesPage = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (elementPosition < screenHeight * 0.9) {
          element.classList.add('fade-in');
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Our Services | InnovateHub Inc.</title>
        <meta name="description" content="Discover our smart solutions for the digital economy - from Fintech Solutions to AI Solutions." />
      </Helmet>
      
      <Toaster position="top-right" />
      
      {/* Background patterns */}
      <CircuitBackground pattern="curvy-line" className="fixed top-0 right-0" size="lg" opacity={0.1} color="primary" />
      
      <CircuitBackground pattern="blue-curve" className="fixed -bottom-40 -left-40" size="xl" opacity={0.2} color="primary" />
      
      <CircuitBackground pattern="dotted-grid" className="fixed top-1/4 right-1/4" size="md" opacity={0.1} />
      
      {/* Main content */}
      <Navbar />
      <main className="w-full py-0">
        <ServicesHero 
          title="What We Do" 
          subtitle="Smart Solutions for the Digital Economy" 
          imagePath="/lovable-uploads/dea0d8a1-2294-4073-9761-8113ef0bed55.png" 
        />
        <div id="service-tiles">
          <ServiceTiles />
        </div>
        <Features />
        <FintechServicesShowcase />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;
