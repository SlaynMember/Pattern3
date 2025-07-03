import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '../types/Project';
import ProjectCard from './ProjectCard';

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    scrollToFeatured();
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    scrollToFeatured();
  };
  
  const scrollToFeatured = () => {
    if (window.innerWidth < 768) {
      featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No featured projects available.
      </div>
    );
  }
  
  return (
    <div ref={featuredRef} className="relative">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors"
          aria-label="Previous project"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <span className="text-xl font-medium">{activeIndex + 1}</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-400">{projects.length}</span>
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors"
          aria-label="Next project"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`transition-all duration-500 transform ${
              index === activeIndex
                ? 'md:col-span-2 scale-100 opacity-100'
                : index === (activeIndex + 1) % projects.length
                ? 'md:col-span-1 scale-95 opacity-90'
                : 'hidden md:block md:col-span-0 scale-90 opacity-80'
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;