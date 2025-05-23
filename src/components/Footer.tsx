
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavLinks from '@/components/footer/FooterNavLinks';
import FooterContactInfo from '@/components/footer/FooterContactInfo';
import FooterSocialLinks from '@/components/footer/FooterSocialLinks';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 md:py-16 px-6 bg-slate-900 text-white relative mb-0 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <img 
                src="/logo.svg" 
                alt="InnovateHub Logo"
                className="h-16 md:h-20 w-auto mb-4 md:mb-0 md:mr-3"
              />
              <div className="text-center md:text-left md:ml-3">
                <h3 className="font-bold text-lg md:text-xl">InnovateHub</h3>
                <p className="text-gray-400 text-sm">Digital Innovation Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Empowering the future with innovative digital solutions for businesses in the Philippines and beyond.
            </p>
            
            <div className="flex justify-center md:justify-start">
              <FooterSocialLinks />
            </div>
          </div>
          
          {/* Quick Links - Now we don't need to pass props as the component has defaults */}
          <FooterNavLinks />
          
          {/* Contact Information */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">Contact Us</h3>
            <FooterContactInfo />
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} InnovateHub Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
