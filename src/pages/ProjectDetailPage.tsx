import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useProjectContext } from '../context/ProjectContext';
import ProjectGallery from '../components/ProjectGallery';
import ProjectVideo from '../components/ProjectVideo';
import NotFound from '../components/NotFound';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useProjectContext();
  const [nextProject, setNextProject] = useState<string | null>(null);
  const [prevProject, setPrevProject] = useState<string | null>(null);
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (project) {
      const currentIndex = projects.findIndex(p => p.id === id);
      
      if (currentIndex < projects.length - 1) {
        setNextProject(projects[currentIndex + 1].id);
      } else {
        setNextProject(null);
      }
      
      if (currentIndex > 0) {
        setPrevProject(projects[currentIndex - 1].id);
      } else {
        setPrevProject(null);
      }
    }

    window.scrollTo(0, 0);
  }, [id, project, projects]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft size={16} /> Back to all projects
        </Link>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="md:col-span-1">
              {project.videoEmbed ? (
                <ProjectVideo embedCode={project.videoEmbed} />
              ) : (
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
            
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Client</h3>
                      <p className="text-gray-800">{project.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Year</h3>
                      <p className="text-gray-800">{project.year}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Services</h3>
                      <p className="text-gray-800">{project.services.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gallery Section */}
          {project.images.length > 1 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <ProjectGallery images={project.images} />
            </div>
          )}
          
          {/* Navigation between projects */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between">
              {prevProject ? (
                <Link 
                  to={`/project/${prevProject}`}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-primary"
                >
                  <ArrowLeft size={16} /> Previous Project
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextProject ? (
                <Link 
                  to={`/project/${nextProject}`}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-primary"
                >
                  Next Project <ArrowRight size={16} />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;