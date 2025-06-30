import { Mail, ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <img 
              src="/images/logos/pattern3white.png" 
              alt="Pattern3 LLC" 
              className="h-10 mb-3 mx-auto md:mx-0"
            />
            <p className="text-gray-300 text-sm">
              Pattern3 LLC | AI solutions for real businesses
            </p>
            <p className="text-gray-400 text-sm">
              Powered by human-centered design. Serving clients nationwide.
            </p>
          </div>

          {/* Contact and CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:will@pattern3.com"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={18} />
              <span className="text-sm">will@pattern3.com</span>
            </a>
            
            <a
              href="https://www.instagram.com/pattern3solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              aria-label="Follow on Instagram"
              title="Follow on Instagram"
            >
              <Instagram size={18} />
              <span className="text-sm">@pattern3solutions</span>
            </a>
            
            <Link
              to="/start"
              className="group inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
            >
              Ready to start?
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Pattern3 LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;