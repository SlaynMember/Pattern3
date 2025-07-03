import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="h-12 md:h-16">
          <img 
            src="/images/logos/pattern3black.png" 
            alt="Pattern3 Logo" 
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu - Right Aligned */}
        <nav className="hidden md:flex gap-10 ml-auto">
          <Link
            href="/"
            className={`transition-all duration-300 font-medium text-lg hover:text-primary ${
              isActive('/') ? 'text-primary font-semibold' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`transition-all duration-300 font-medium text-lg hover:text-primary ${
              isActive('/work') ? 'text-primary font-semibold' : 'text-gray-800'
            }`}
          >
            Work
          </Link>
          <Link
            href="/start"
            className={`transition-all duration-300 font-medium text-lg hover:text-primary ${
              isActive('/start') ? 'text-primary font-semibold' : 'text-gray-800'
            }`}
          >
            Start
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-300 font-medium text-lg hover:text-primary ${
              isActive('/about') ? 'text-primary font-semibold' : 'text-gray-800'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg border-t border-gray-200">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link
              href="/"
              className={`py-3 px-4 text-lg font-medium transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={`py-3 px-4 text-lg font-medium transition-colors ${
                isActive('/work') ? 'text-primary font-semibold' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/start"
              className={`py-3 px-4 text-lg font-medium transition-colors ${
                isActive('/start') ? 'text-primary font-semibold' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start
            </Link>
            <Link
              href="/about"
              className={`py-3 px-4 text-lg font-medium transition-colors ${
                isActive('/about') ? 'text-primary font-semibold' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
