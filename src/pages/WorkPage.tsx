import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjectContext } from '../hooks/useProjectContext';
import ProjectCard from '../components/ProjectCard';

const WorkPage = () => {
  const { projects } = useProjectContext();
  const [animatedProjects, setAnimatedProjects] = useState<number[]>([]);
  
  useEffect(() => {
    const animateProjects = () => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedProjects(prev => [...prev, index]);
        }, 150 * index);
      });
    };
    
    animateProjects();

    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-black mb-6">Case Studies & Proof of Concept</h1>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
          <p className="fade-in-up text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Recent builds and client outcomes showcasing real AI solutions for real businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`transform transition-all duration-700 ${
                animatedProjects.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <div className="fade-in-up max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">Want something like this?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business with custom AI solutions? Let's discuss your project.
            </p>
            <Link
              to="/start"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;