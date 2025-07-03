import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };
  
  if (!images || images.length === 0) {
    return <div className="text-gray-500">No images available for this project.</div>;
  }
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video">
          <img
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
        
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
              index === currentIndex ? 'border-primary' : 'border-transparent hover:border-gray-300'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;