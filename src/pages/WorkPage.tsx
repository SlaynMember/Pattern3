import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjectContext } from '../hooks/useProjectContext';
import ProjectCard from '../components/ProjectCard';

const WorkPage = () => {
  const { projects } = useProjectContext();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  
  // Define filter categories
  const filterCategories = ['All', 'Healthcare', 'AI Tools', 'Creative', 'Automation'];
  
  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'All') return true;
    
    const projectTags = project.tags.map(tag => tag.toLowerCase());
    const clientLower = project.client.toLowerCase();
    const titleLower = project.title.toLowerCase();
    
    switch (selectedFilter) {
      case 'Healthcare':
        return projectTags.some(tag => 
          tag.includes('healthcare') || 
          tag.includes('dental') || 
          tag.includes('medical')
        ) || clientLower.includes('dental') || titleLower.includes('dental');
      case 'AI Tools':
        return projectTags.some(tag => 
          tag.includes('ai') || 
          tag.includes('automation') || 
          tag.includes('gemini') || 
          tag.includes('gpt') ||
          tag.includes('openai') ||
          tag.includes('sora')
        ) || titleLower.includes('ai');
      case 'Creative':
        return projectTags.some(tag => 
          tag.includes('video') || 
          tag.includes('photography') || 
          tag.includes('branding') ||
          tag.includes('content') ||
          tag.includes('design')
        );
      case 'Automation':
        return projectTags.some(tag => 
          tag.includes('automation') || 
          tag.includes('no-code') ||
          tag.includes('workflow') ||
          tag.includes('ai automation')
        );
      default:
        return true;
    }
  });
  
  useEffect(() => {
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
  }, []);

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

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No projects found for "{selectedFilter}" category.</p>
            <button
              onClick={() => setSelectedFilter('All')}
              className="mt-4 text-primary hover:text-accent font-semibold"
            >
              View All Projects
            </button>
          </div>
        )}

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