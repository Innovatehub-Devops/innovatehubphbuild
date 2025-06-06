
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CircuitBackground from '@/components/CircuitBackground';
import ServicesHero from '@/components/ServicesHero';
import AllServicesShowcase from '@/components/AllServicesShowcase';
import AllServicesHeroImage from '@/components/services/AllServicesHeroImage';
import Features from '@/components/Features';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const AllServicesPage = () => {
  // Scroll to top on page load
  useScrollToTop();
  
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
    <div className="min-h-screen w-full overflow-x-hidden relative bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>All Services | InnovateHub Inc.</title>
        <meta name="description" content="Explore our complete range of innovative technology services including Fintech, Digital Customization, AI Solutions, and more." />
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
          title="Complete Service Suite" 
          subtitle="All Our Digital Solutions" 
          description="We provide comprehensive digital transformation services tailored to your business needs"
          primaryButtonText="Explore Services"
          primaryButtonLink="#all-services"
          imageComponent={<AllServicesHeroImage />}
        />
        
        <div id="all-services">
          <AllServicesShowcase />
        </div>
        
        <Features />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default AllServicesPage;
