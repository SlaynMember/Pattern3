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
            <h2 className="text-3xl font-semibold mb-8">About Pattern3</h2>
            
            <div className="vision-mission-container">
              <div className="vision-mission-column">
                <h3 className="vision-mission-header">Vision</h3>
                <div className="space-y-6">
                  <p className="vision-mission-intro">
                    Pattern3 is both a platform and personal lab — built to explore, document, and deliver beautiful, human-centered AI systems.
                  </p>
                  <p className="vision-mission-description">
                    We believe AI should feel like a creative partner, not just an automation tool. Our vision is to bridge the gap between complex technology and the real-world problems it can solve - with clarity, empathy, and design.
                  </p>
                </div>
              </div>
              
              <div className="mobile-divider"></div>
              
              <div className="vision-mission-column">
                <h3 className="vision-mission-header">Mission</h3>
                <div className="space-y-6">
                  <p className="vision-mission-intro">
                    Pattern3 empowers small businesses, solo founders, and creative teams to modernize through AI — no dev team or enterprise budget required.
                  </p>
                  
                  <div className="mission-points-container">
                    <p className="mission-points-intro">We help you:</p>
                    
                    <div className="mission-points-grid">
                      <div className="mission-point">
                        <div className="mission-icon">🧠</div>
                        <div className="mission-content">
                          <h4 className="mission-subheader">Spot inefficiencies</h4>
                          <p className="mission-description">
                            Outdated tools or clunky workflows? We zero in on the bottlenecks holding you back.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mission-point">
                        <div className="mission-icon">⚡</div>
                        <div className="mission-content">
                          <h4 className="mission-subheader">Deliver real solutions, fast</h4>
                          <p className="mission-description">
                            Beautiful, visual-first automations using GPT, Supabase, Make, Notion, and more.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mission-point">
                        <div className="mission-icon">🎬</div>
                        <div className="mission-content">
                          <h4 className="mission-subheader">Show, don't just tell</h4>
                          <p className="mission-description">
                            Every solution comes with clean UX, clear branding, and video walkthroughs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mission-point">
                        <div className="mission-icon">📓</div>
                        <div className="mission-content">
                          <h4 className="mission-subheader">Build in the open</h4>
                          <p className="mission-description">
                            We document everything — showing what can be built with curiosity, clarity, and constraint.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed font-medium text-center">
                Whether it's a car dealership, dental clinic, or your own startup idea - Pattern3 is the home for systems that work and look good doing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;