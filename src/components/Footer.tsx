import { FileText, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left max-w-sm">
            <img 
              src="/images/logos/patternwhite.png" 
              alt="Pattern3" 
              className="h-12 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering small businesses, solo founders, and creative teams to modernize through AI - without needing a full dev team or enterprise budget.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/will-n-patterson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="/images/profile/Will_Patterson_Resume_June2025.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <FileText size={20} />
            </a>
            <a
              href="mailto:william.n.patterson@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © Pattern3. All rights reserved.
          </p>
          <Link
            to="/start"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors"
          >
            Ready to start your AI journey?
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;