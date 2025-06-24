import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="h-12 md:h-16">
          <img 
            src="/images/logos/pattern3black.png" 
            alt="Pattern3 Logo" 
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link
            to="/"
            className={`transition-colors duration-300 hover:text-primary ${
              isActive('/') ? 'text-primary font-medium' : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/work"
            className={`transition-colors duration-300 hover:text-primary ${
              isActive('/work') ? 'text-primary font-medium' : 'text-gray-800'
            }`}
          >
            Work
          </Link>
          <Link
            to="/ai"
            className={`transition-colors duration-300 hover:text-primary ${
              isActive('/ai') ? 'text-primary font-medium' : 'text-gray-800'
            }`}
          >
            AI
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-300 hover:text-primary ${
              isActive('/about') ? 'text-primary font-medium' : 'text-gray-800'
            }`}
          >
            About
          </Link>
          <Link
            to="/start"
            className={`transition-colors duration-300 hover:text-primary ${
              isActive('/start') ? 'text-primary font-medium' : 'text-gray-800'
            }`}
          >
            Start Here
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`py-2 px-4 ${
                isActive('/') ? 'text-primary font-medium' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`py-2 px-4 ${
                isActive('/work') ? 'text-primary font-medium' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/ai"
              className={`py-2 px-4 ${
                isActive('/ai') ? 'text-primary font-medium' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI
            </Link>
            <Link
              to="/about"
              className={`py-2 px-4 ${
                isActive('/about') ? 'text-primary font-medium' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/start"
              className={`py-2 px-4 ${
                isActive('/start') ? 'text-primary font-medium' : 'text-gray-800'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Here
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;