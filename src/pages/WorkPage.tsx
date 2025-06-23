import { useState, useEffect } from 'react';
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
  }, [projects]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A comprehensive collection of my projects, showcasing my skills,
            creativity, and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`transform transition-all duration-500 ${
                animatedProjects.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;