import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import { useProjectContext } from '../context/ProjectContext';

const HomePage = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const { projects } = useProjectContext();
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Pattern3 Vision Section */}
      <section ref={bioRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Pattern3, we believe that exceptional design emerges when we discover the critical 
              third element that others overlook. While most solutions focus on aesthetics and 
              functionality, we integrate human connection as the essential bridge that transforms 
              good design into extraordinary experiences.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Through AI innovation and human-centered design, we create digital solutions that don't 
              just meet technical requirements—they resonate deeply with the people they serve, 
              creating meaningful connections in our increasingly digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our latest projects where we've successfully bridged design, technology, 
              and human connection to create impactful solutions.
            </p>
          </div>
          
          <FeaturedProjects projects={featuredProjects} />
          
          <div className="text-center mt-12 animate-on-scroll">
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