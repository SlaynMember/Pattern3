import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { products } from '../stripe-config';
import { createCheckoutSession } from '../lib/stripe';

declare global {
  interface Window {
    Tally: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

const StartPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const freeToolkit = products.find(p => p.name === 'P3 Starter Kit (Free Beta Access)');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = async () => {
    if (!freeToolkit || loading) return;
    
    try {
      setLoading(true);
      const url = await createCheckoutSession();
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
      setLoading(false);
      alert('Failed to start checkout process. Please try again.');
    }
  };

  const openTallyForm = () => {
    if (window.Tally) {
      window.Tally.openPopup('m6yMbN', {
        layout: 'modal',
        hideTitle: true,
        emojiAnimation: 'none',
        autoClose: 0
      });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6ba1a3] to-transparent animate-pulse"></div>
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#6ba1a3] opacity-20 animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 4 + 's',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#6ba1a3] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Main Site</span>
          </Link>
          {isScrolled && (
            <img
              src="/images/logos/patternblack.png"
              alt="Pattern3 Logo"
              className="h-8"
            />
          )}
        </div>
        {/* Scroll Progress Bar */}
        <div className="h-0.5 bg-gray-100">
          <div
            className="h-full bg-[#6ba1a3] transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/images/logos/patternblack.png"
              alt="Pattern3 Logo"
              className="h-24 mx-auto"
            />
          </div>

          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/images/profile/headshot.jpg"
              alt="Will Patterson"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#6ba1a3] max-w-[640px] mx-auto">
            Start Here
          </h1>
          <div className="w-16 h-1 bg-[#6ba1a3] mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1a1a1a] leading-snug">
            Your AI Creative Toolkit
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-12 px-4 md:px-0">
            Discover the tools, workflows, and tutorials behind Pattern3—built for creators like you.
          </p>
        </div>

        {/* CTA Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16 px-4 md:px-0">
          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 text-center cursor-pointer ${
              loading ? 'opacity-70' : ''
            }`}
          >
            <div className="text-3xl w-10 h-10 mb-3 mx-auto">🧰</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a] tracking-wide">
              Download the Free AI Toolkit
            </h3>
            <p className="text-sm text-gray-600 max-w-[320px] mx-auto">
              3 workflows. Zero code. Built to launch you forward.
            </p>
          </button>
          <a
            href="https://www.tiktok.com/@w_patt3"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 text-center"
          >
            <div className="text-3xl w-10 h-10 mb-3 mx-auto">🎥</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a] tracking-wide">
              Stay Up to Date
            </h3>
            <p className="text-sm text-gray-600 max-w-[320px] mx-auto">
              Follow along with the latest tutorials and updates.
            </p>
          </a>
          <Link
            to="/work"
            className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 text-center"
          >
            <div className="text-3xl w-10 h-10 mb-3 mx-auto">💻</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a] tracking-wide">
              Explore Pattern3 Projects
            </h3>
            <p className="text-sm text-gray-600 max-w-[320px] mx-auto">
              See real client work and creative automation in action.
            </p>
          </Link>
          <button
            onClick={openTallyForm}
            className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 text-center"
          >
            <div className="text-3xl w-10 h-10 mb-3 mx-auto">🤝</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a] tracking-wide">
              Let's Connect
            </h3>
            <p className="text-sm text-gray-600 max-w-[320px] mx-auto">
              Share your ideas and let's create something together.
            </p>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8">
          Pattern3 | Creative tools for the AI generation.
        </div>
      </div>
    </div>
  );
};

export default StartPage;