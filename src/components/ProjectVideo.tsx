interface ProjectVideoProps {
  embedCode?: string;
}

const ProjectVideo = ({ embedCode }: ProjectVideoProps) => {
  if (!embedCode) return null;

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="relative">
        <div 
          className="w-full"
          dangerouslySetInnerHTML={{ __html: embedCode }} 
        />
      </div>
    </div>
  );
};

export default ProjectVideo;