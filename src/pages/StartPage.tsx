import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Check, Users, Building, Stethoscope, UserCheck, FileText, MessageCircle, ArrowRight, Plus, Shield } from 'lucide-react';
import RoadmapBookingForm from '../components/RoadmapBookingForm';

const StartPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const scrollToForm = () => {
    const formElement = document.getElementById('roadmap-booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6ba1a3] to-transparent animate-pulse"></div>
        <div className="absolute w-full h-full">
          {[...Array(30)].map((_, i) => (
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
          <button
            onClick={scrollToForm}
            className="px-4 py-2 bg-[#6ba1a3] text-white rounded-md hover:bg-[#4f8385] transition-colors text-sm font-medium"
          >
            Book AI Roadmap
          </button>
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
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-8">
            <img
              src="/images/logos/patternblack.png"
              alt="Pattern3 Logo"
              className="h-16 mx-auto mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Start with an AI Roadmap,<br />
            <span className="text-[#6ba1a3]">Built for Real Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Not sure where to begin with AI? In 5 days, we'll show you where to automate, 
            upgrade, and move faster – for just <span className="font-semibold text-gray-900">$399</span>.
          </p>
          
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6ba1a3] text-white rounded-xl hover:bg-[#4f8385] transition-all duration-200 transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
            Book My Roadmap
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            Includes Loom video walkthrough + custom PDF roadmap
          </p>
        </div>

        {/* What You Get Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Loom Video Walkthrough</h3>
              <p className="text-gray-600 leading-relaxed">
                Personal 15-minute video explaining your custom roadmap, 
                priority actions, and implementation timeline.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">PDF Roadmap with Quick Wins</h3>
              <p className="text-gray-600 leading-relaxed">
                Detailed action plan with 30, 60, 90-day milestones and 
                immediate improvements you can implement today.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plus className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Bonus: Curated AI Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Top 5 AI tools specifically chosen for your workflow, 
                with setup guides and cost breakdowns.
              </p>
            </div>
          </div>
        </div>

        {/* Who It's For Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Who It's For
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Healthcare Clinics</h3>
              <p className="text-gray-700 leading-relaxed">
                Drowning in paperwork and manual processes? 
                We'll show you where AI can save hours daily.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Solo Founders</h3>
              <p className="text-gray-700 leading-relaxed">
                Overwhelmed by AI tool options? We'll cut through 
                the noise and focus on what actually moves your business.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Businesses</h3>
              <p className="text-gray-700 leading-relaxed">
                Running on outdated systems? Discover simple AI upgrades 
                that don't require a tech team.
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <RoadmapBookingForm />
        </div>

        {/* Future Products Tease */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            More Solutions in the Lab
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 text-center opacity-75">
              <h3 className="text-lg font-semibold mb-2 text-gray-600">🖥️ Website Rescue Kit</h3>
              <p className="text-gray-500 text-sm mb-3">Transform outdated websites into conversion machines</p>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">Coming Soon</span>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-gray-300 text-center opacity-75">
              <h3 className="text-lg font-semibold mb-2 text-gray-600">🩺 Clinic Automation Kit</h3>
              <p className="text-gray-500 text-sm mb-3">End-to-end patient workflow automation</p>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">Ask about early access</span>
            </div>
          </div>
        </div>

        {/* Learn With Us Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-[#6ba1a3]/10 to-[#6ba1a3]/5 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-[#6ba1a3]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#6ba1a3]" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Open Tools, Private Work</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              At Pattern3, we share ideas, tools, and workflows — never your data.
            </p>
            <a
              href="https://www.tiktok.com/@w_patt3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              @w_patt3 on TikTok
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">How fast is it?</h3>
              <p className="text-gray-600">5-day turnaround from booking to delivery. You'll receive your complete roadmap within one business week.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Do I need tech skills?</h3>
              <p className="text-gray-600">Nope – the roadmap is personalized for your current skill level and includes step-by-step guidance for every recommendation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">What happens after I get my roadmap?</h3>
              <p className="text-gray-600">You can implement it yourself using our guides, or hire Pattern3 for hands-on implementation. The choice is yours.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8 mt-16">
          Pattern3 | AI solutions that bridge technology and human connection.
        </div>
      </div>
    </div>
  );
};

export default StartPage;