import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import { useProjectContext } from '../hooks/useProjectContext';

const HomePage = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const { projects } = useProjectContext();
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        const elementId = el.getAttribute('data-animate-id') || `element-${index}`;
        
        if (isVisible && !animatedElements.has(elementId)) {
          el.classList.add('fade-in');
          setAnimatedElements(prev => new Set(prev).add(elementId));
          
          // Stagger animation for child elements
          const staggerElements = el.querySelectorAll('.stagger-item');
          staggerElements.forEach((child, childIndex) => {
            setTimeout(() => {
              child.classList.add('stagger-fade-in');
            }, childIndex * 150);
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedElements]);

  const scrollToBio = () => {
    bioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center pt-32 md:pt-0">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hey, I'm <span className="text-primary">Will</span>
                <br />
                Founder of Pattern<span className="text-primary">3</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                I bridge the gap between design, technology, and human connection. Through Pattern3, 
                we create AI-powered solutions that transform how people interact with technology.
              </p>
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md transition hover:bg-gray-800"
              >
                View Work <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl transform md:translate-y-4">
              <img
                src="/images/profile/headshot.jpg"
                alt="Will - Founder of Pattern3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToBio}
            aria-label="Scroll down"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowRight size={24} className="transform rotate-90" />
          </button>
        </div>
      </section>

      {/* Pattern3 Vision & Mission Section */}
      <section ref={bioRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll" data-animate-id="vision-mission-header">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Vision & Mission</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how Pattern3 bridges the gap between complex technology and real-world solutions
              </p>
            </div>
            
            {/* Vision & Mission Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start animate-on-scroll" data-animate-id="vision-mission-content">
              {/* Vision Column */}
              <div className="space-y-6">
                <div className="stagger-item opacity-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 vision-mission-header cursor-default">
                    Vision
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                      Pattern3 is both a platform and personal lab — built to explore, document, and deliver beautiful, human-centered AI systems.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We believe AI should feel like a creative partner, not just an automation tool. Our vision is to bridge the gap between complex technology and the real-world problems it can solve - with clarity, empathy, and design.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Divider */}
              <div className="mobile-divider lg:hidden"></div>
              
              {/* Mission Column */}
              <div className="space-y-6">
                <div className="stagger-item opacity-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 vision-mission-header cursor-default">
                    Mission
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                      Pattern3 empowers small businesses, solo founders, and creative teams to modernize through AI - without needing a full dev team or enterprise budget.
                    </p>
                    
                    <div className="space-y-5">
                      <div className="stagger-item opacity-0">
                        <div className="flex items-start gap-4 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2.5 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Identifying bottlenecks in outdated or inefficient systems
                          </p>
                        </div>
                      </div>
                      
                      <div className="stagger-item opacity-0">
                        <div className="flex items-start gap-4 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2.5 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Delivering fast, functional, and visual-first solutions with tools like GPT, Supabase, Make, and Notion
                          </p>
                        </div>
                      </div>
                      
                      <div className="stagger-item opacity-0">
                        <div className="flex items-start gap-4 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2.5 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Wrapping every solution in clear storytelling, branded UX, and videos that actually show what you're getting
                          </p>
                        </div>
                      </div>
                      
                      <div className="stagger-item opacity-0">
                        <div className="flex items-start gap-4 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mt-2.5 flex-shrink-0 group-hover:scale-110 transition-transform"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Using this journey as a public record - showing what can be built with curiosity, constraint, and the right automation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Closing Statement */}
            <div className="mt-16 animate-on-scroll" data-animate-id="closing-statement">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium text-center max-w-4xl mx-auto">
                  Whether it's a car dealership, dental clinic, or your own startup idea - Pattern3 is the home for systems that 
                  <span className="text-primary font-semibold"> work and look good doing it</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 animate-on-scroll" data-animate-id="featured-work-header">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our latest projects where we've successfully bridged design, technology, 
              and human connection to create impactful solutions.
            </p>
          </div>
          
          <FeaturedProjects projects={featuredProjects} />
          
          <div className="text-center mt-12 animate-on-scroll" data-animate-id="view-all-projects">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md transition hover:bg-gray-800"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;