import { useEffect } from 'react';

const AboutPage = () => {
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
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
          <div className="w-16 h-1 bg-primary mx-auto mb-12"></div>
          
          {/* Personal Story Section */}
          <div className="mb-16 animate-on-scroll">
            <div className="bg-gray-100 p-6 rounded-lg overflow-hidden mb-8">
              <div className="max-w-lg mx-auto">
                <img
                  src="/images/profile/childhood.jpg"
                  alt="Childhood photo with brother"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center italic">
                My brother and I in our childhood years
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                As the founder of Pattern3 and an AI specialist, my journey has been shaped by a unique perspective forged across cultures, disciplines, and technologies. Raised in the artistic landscapes of Italy, I developed an eye for beauty and craftsmanship that continues to influence my approach to design and AI innovation. When I moved to New York City in my final year of middle school, I was thrust into a world that demanded independence and courage—qualities that have become foundational to my approach to technological advancement and human-centered design.
              </p>
              <p>
                My academic path began in medicine at Baylor University, where I developed a rigorous analytical mindset essential for AI development and a deep appreciation for human-centered solutions. It was at this intersection of technology, design, and human understanding that I discovered my true calling—a space where data-driven precision meets creative innovation, and where AI thrives by discovering meaningful patterns in seemingly disparate elements.
              </p>
              <p>
                What truly sets my approach apart in the AI landscape is my passion for storytelling as the essential bridge between technology and humanity. While many AI specialists focus solely on algorithms and innovation directors concentrate on market applications, I bring in the critical third element—human connection through narrative. I believe that behind every successful AI solution is a compelling story that resonates on a fundamental human level, making complex technology accessible, meaningful, and impactful.
              </p>
              <p>
                My ability to synthesize cross-cultural perspectives, interdisciplinary education, and narrative-driven approaches creates a unique lens through which I approach every AI challenge: not as a binary problem of function versus form, but as an opportunity to discover the pattern that reveals how technology can authentically connect with human experience. This perspective enables me to develop AI solutions that aren't just technically sophisticated or aesthetically pleasing, but deeply resonant with the people they serve.
              </p>
            </div>
          </div>
          
          {/* Pattern3 Section */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-semibold mb-6">About Pattern3</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Pattern3, we believe that exceptional design emerges when we discover the critical 
                third element that others overlook. While most solutions focus on aesthetics and 
                functionality, we integrate human connection as the essential bridge that transforms 
                good design into extraordinary experiences.
              </p>
              <p>
                Through AI innovation and human-centered design, we create digital solutions that don't 
                just meet technical requirements—they resonate deeply with the people they serve, 
                creating meaningful connections in our increasingly digital world.
              </p>
              <p>
                Our work spans across various disciplines, from AI implementation and knowledge management 
                to brand strategy and digital transformation. We specialize in identifying the unique patterns 
                that connect technology, design, and human experience, creating solutions that drive meaningful 
                engagement and lasting impact. Whether we're developing AI-powered platforms, crafting brand 
                narratives, or designing user experiences, our focus remains on building authentic connections 
                that elevate good design into extraordinary experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;