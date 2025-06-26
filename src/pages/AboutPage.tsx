import { useEffect } from 'react';
import { FileText, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const skills = [
    'Claude',
    'Bolt',
    'Supabase',
    'Stripe',
    'GPT-4',
    'Gemini',
    'Make',
    'Google Cloud',
    'LangChain',
    'JavaScript',
    'APIs',
    'No-Code',
    'AI Agents'
  ];

  const certifications = [
    {
      title: 'Google Cloud ML Engineer',
      status: 'In Progress',
      className: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'LangChain Bootcamp',
      status: 'In Progress',
      className: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'DeepLearning.AI Prompt Engineering',
      status: 'Completed',
      className: 'bg-green-100 text-green-800'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pattern3 LLC</h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI strategy, automation, and design-forward tools that bridge technology and human connection
            </p>
          </div>

          {/* What Pattern3 Does */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pattern3 LLC specializes in making advanced AI accessible to small businesses, solo entrepreneurs, and creative teams. 
                We don't just implement technology — we craft human-centered experiences where AI becomes a creative partner, not just an automation tool.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach combines cutting-edge AI capabilities with thoughtful design and rapid implementation, 
                delivering solutions that feel intuitive and resonate with your users while solving real business challenges.
              </p>
            </div>
          </div>

          {/* Will's Story */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Meet Will Patterson</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-100 p-6 rounded-lg overflow-hidden mb-6">
                  <img
                    src="/images/profile/headshot.jpg"
                    alt="Will Patterson - Founder of Pattern3 LLC"
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  As the founder of Pattern3 LLC, my journey has been shaped by a unique perspective forged across cultures, disciplines, and technologies. 
                  Raised in the artistic landscapes of Italy, I developed an eye for beauty and craftsmanship that continues to influence my approach to AI innovation.
                </p>
                <p>
                  My academic path began in medicine at Baylor University, where I developed the analytical mindset essential for AI development and 
                  a deep appreciation for human-centered solutions. This intersection of technology, design, and human understanding became my calling.
                </p>
                <p>
                  What sets my approach apart is my passion for storytelling as the bridge between technology and humanity. 
                  I believe that behind every successful AI solution is a compelling story that resonates on a fundamental human level, 
                  making complex technology accessible, meaningful, and impactful.
                </p>
              </div>
            </div>
          </div>

          {/* The Pattern3 Way */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The Pattern3 Way</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our methodology emphasizes narrative-driven, visual-first, no-code enabled builds
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Narrative-Driven</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every solution starts with understanding your story, your challenges, and your vision for the future.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Visual-First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Beautiful, intuitive interfaces that make AI feel like a natural extension of your workflow.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">No-Code Enabled</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rapid prototyping and implementation using modern no-code tools for faster results.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Step Process */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Discovery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We start with understanding your business, challenges, and goals through detailed consultation and analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Audit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We examine your current systems and workflows to identify automation opportunities and efficiency gains.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Build</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We create and implement your custom AI solution with ongoing support and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Currently Learning</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 rounded-full ${cert.className} flex items-center gap-2`}
                >
                  <span className="font-medium">{cert.title}</span>
                  <span className="text-sm">({cert.status})</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Your AI Journey?</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Let's discuss how Pattern3 LLC can help transform your business with human-centered AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/start"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
                <a
                  href="/images/profile/Will_Patterson_Resume_June2025.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <FileText size={20} /> View Resume
                </a>
                <a
                  href="mailto:william.n.patterson@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail size={20} /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;