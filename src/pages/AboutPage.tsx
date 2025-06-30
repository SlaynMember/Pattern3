import { useEffect, useState } from 'react';
import { FileText, Mail, ArrowRight, Zap, Target, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);

  useEffect(() => {
    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Handle process step checkmarks
          if (entry.target.classList.contains('process-step')) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setTimeout(() => {
              setCheckedSteps(prev => [...prev, stepIndex]);
            }, 300);
          }
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .stagger-fade-in, .process-step');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'Claude', 'Bolt', 'Supabase', 'Stripe', 'GPT-4', 'Gemini', 'Make',
    'Google Cloud', 'LangChain', 'JavaScript', 'APIs', 'No-Code', 'AI Agents'
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-black mb-6">About Pattern3 LLC</h1>
            <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
            <p className="fade-in-up text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
              AI strategy, automation, and design-forward tools that bridge technology and human connection
            </p>
          </div>

          {/* What Pattern3 Does */}
          <div className="mb-24 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-6">What We Do</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            </div>
            
            <div className="card bg-gradient-to-br from-gray-50 to-white border-gradient">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Pattern3 LLC specializes in making advanced AI accessible to small businesses, solo entrepreneurs, and creative teams. 
                We don't just implement technology — we craft human-centered experiences where AI becomes a creative partner, not just an automation tool.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our approach combines cutting-edge AI capabilities with thoughtful design and rapid implementation, 
                delivering solutions that feel intuitive and resonate with your users while solving real business challenges.
              </p>
            </div>
          </div>

          {/* Will's Story */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">Meet Will Patterson</h2>
              <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <div className="card p-0 overflow-hidden">
                  <picture>
                    <source srcSet="/images/profile/headshot.webp" type="image/webp" />
                    <img
                      src="/images/profile/headshot.jpg"
                      alt="Will Patterson - Founder of Pattern3 LLC"
                      className="w-full h-auto rounded-xl"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
              
              <div className="slide-in-right space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
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
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">The Pattern3 Way</h2>
              <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
              <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                Our methodology emphasizes narrative-driven, visual-first, no-code enabled builds
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Target,
                  title: "Narrative-Driven",
                  description: "Every solution starts with understanding your story, your challenges, and your vision for the future.",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-50 to-blue-100",
                  delay: "0s"
                },
                {
                  icon: Zap,
                  title: "Visual-First",
                  description: "Beautiful, intuitive interfaces that make AI feel like a natural extension of your workflow.",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-50 to-purple-100",
                  delay: "0.1s"
                },
                {
                  icon: Users,
                  title: "No-Code Enabled",
                  description: "Rapid prototyping and implementation using modern no-code tools for faster results.",
                  gradient: "from-green-500 to-green-600",
                  bgGradient: "from-green-50 to-green-100",
                  delay: "0.2s"
                }
              ].map((item, index) => (
                <div key={index} className={`stagger-fade-in bg-gradient-to-br ${item.bgGradient} card text-center`} style={{ animationDelay: item.delay }}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process - Redesigned with Checkmarks */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">Our Process</h2>
              <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              {[
                {
                  icon: Target,
                  title: "Discovery",
                  description: "Understanding your business, challenges, and goals",
                  delay: "0s"
                },
                {
                  icon: Zap,
                  title: "Audit",
                  description: "Examining systems to identify automation opportunities",
                  delay: "0.1s"
                },
                {
                  icon: Users,
                  title: "Build",
                  description: "Creating and implementing your custom AI solution",
                  delay: "0.2s"
                }
              ].map((item, index) => (
                <div key={index} className={`process-step text-center max-w-xs relative`} data-step={index} style={{ animationDelay: item.delay }}>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Animated Checkmark */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                      checkedSteps.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">Skills & Tools</h2>
              <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
            </div>
            <div className="fade-in-up flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.2s' }}>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-full hover:from-primary hover:to-accent hover:text-white transition-all duration-300 font-medium border border-gray-200 hover:border-transparent shadow-sm hover:shadow-md transform hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card bg-gradient-to-br from-primary/5 to-accent/5 border-gradient text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">Ready to Start Your AI Journey?</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how Pattern3 LLC can help transform your business with human-centered AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/start"
                  className="btn-primary inline-flex items-center gap-3 text-lg"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <a
                  href="mailto:will@pattern3.com"
                  className="btn-outline inline-flex items-center gap-3 text-lg"
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