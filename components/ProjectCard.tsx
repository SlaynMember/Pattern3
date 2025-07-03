import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/project/${project.id}`}
      className="block group"
    >
      <div className="card relative overflow-hidden transition-all duration-500 transform md:group-hover:-translate-y-2 md:group-hover:shadow-2xl border-0">
        <div className="relative h-64 overflow-hidden rounded-xl mb-6">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out md:group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          
          {/* Floating Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/20">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="px-2">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex items-center gap-2 text-primary font-semibold opacity-100 translate-x-0 md:opacity-70 md:-translate-x-2 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
