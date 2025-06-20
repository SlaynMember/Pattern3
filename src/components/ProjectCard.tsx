import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      to={`/project/${project.id}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-70'
            }`}
          ></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
          <div
            className={`flex items-center gap-1 text-primary transition-all duration-300 ${
              isHovered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}
          >
            <span className="text-sm font-medium">View Project</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;