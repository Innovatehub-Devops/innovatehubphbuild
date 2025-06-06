
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CircuitBackground from '@/components/CircuitBackground';
import { Helmet } from 'react-helmet';
import ClientsShowcase from '@/components/ClientsShowcase';
import ServicesHero from '@/components/ServicesHero';
import ClientsHeroImage from '@/components/clients/ClientsHeroImage';
import ClientsHeroBackground from '@/components/clients/ClientsHeroBackground';
import TestimonialSlider from '@/components/TestimonialSlider';

const ClientsPage = () => {
  const [selectedTestimonialType, setSelectedTestimonialType] = useState('all');
  
  const testimonials = [
    {
      quote: "We'd like to thank InnovateHub for creating our online restaurant platform with integrated payment gateway. It has streamlined our operations and significantly improved our customer experience.",
      author: "Business Owner",
      role: "Landos Grill",
      avatarUrl: "/lovable-uploads/435e4809-830b-47f7-a2e1-c1667877fbc7.png"
    },
    {
      quote: "Adding a point-of-sale system with QR payments through InnovateHub has transformed how we run our coffee shop. Transactions are faster and our customers love the convenience.",
      author: "Business Owner",
      role: "Barako Brews",
      avatarUrl: "/lovable-uploads/c1082f13-5811-44d2-aaa4-123f819328bf.png"
    },
    {
      quote: "InnovateHub created an integrated online delivery ecosystem with seamless payment integrations for both our web and mobile apps. This has revolutionized our business model completely.",
      author: "Business Owner",
      role: "BTS Delivery",
      avatarUrl: "/lovable-uploads/a281e700-f986-4113-a9d3-5fcaaba04b67.png"
    }
  ];
  
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
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <Helmet>
        <title>Our Clients | InnovateHub Inc.</title>
        <meta name="description" content="Discover the success stories of businesses we've helped transform with our innovative technology solutions." />
      </Helmet>
      
      {/* Background patterns */}
      <CircuitBackground 
        pattern="tech-circle" 
        className="fixed top-20 right-20" 
        size="lg" 
        opacity={0.1} 
        color="primary"
      />
      
      <CircuitBackground 
        pattern="blue-wave" 
        className="fixed -bottom-40 -left-40" 
        size="xl" 
        opacity={0.2} 
        color="primary"
      />
      
      <CircuitBackground 
        pattern="dotted-grid" 
        className="fixed top-1/3 left-1/4" 
        size="md" 
        opacity={0.1}
      />
      
      {/* Main content */}
      <Navbar />
      <div className="w-full py-0">
        <ServicesHero 
          title="Partners in Digital Success" 
          subtitle="Our Clients"
          description="Discover how we've helped businesses of all sizes transform their operations and achieve remarkable growth through innovative technology solutions."
          primaryButtonText="Explore Partnerships"
          primaryButtonLink="#client-showcase"
          imageComponent={<ClientsHeroImage />}
          backgroundComponent={<ClientsHeroBackground />}
          featureItems={[
            { icon: <span className="h-5 w-5 mr-2 text-blue-300">•</span>, text: "Trusted Partnerships" },
            { icon: <span className="h-5 w-5 mr-2 text-blue-300">•</span>, text: "Proven Results" }
          ]}
        />
        
        <div id="client-showcase">
          <ClientsShowcase 
            title="Our Valued Partners" 
            subtitle="Businesses that trust InnovateHub to deliver exceptional solutions"
            showAll={true}
            showFilters={true}
            className="bg-gradient-to-b from-gray-50 to-white"
          />
        </div>
        
        <TestimonialSlider testimonials={testimonials} />
        
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default ClientsPage;
