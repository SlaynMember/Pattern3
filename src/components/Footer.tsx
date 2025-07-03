import { Mail, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo and Company Info */}
          <div className="text-center lg:text-left flex-shrink-0">
            <img 
              src="/images/logos/pattern3white.png" 
              alt="Pattern3 LLC" 
              className="h-10 mb-4 mx-auto lg:mx-0"
            />
            <p className="text-gray-300 text-sm mb-2">
              Pattern3 LLC | AI solutions for real businesses
            </p>
            <p className="text-gray-400 text-sm">
              Powered by human-centered design. Serving clients nationwide.
            </p>
          </div>

          {/* Contact and CTA - Better Spacing */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="mailto:will@pattern3.com"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">will@pattern3.com</span>
              </a>
              
              <a
                href="https://www.instagram.com/pattern3solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap"
                aria-label="Follow on Instagram"
                title="Follow on Instagram"
              >
                <Instagram size={18} className="flex-shrink-0" />
                <span className="text-sm">@pattern3solutions</span>
              </a>
            </div>
            
            <Link
              href="/start"
              className="group inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors whitespace-nowrap"
            >
              Ready to start?
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pattern3 LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;