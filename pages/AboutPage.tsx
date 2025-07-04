import { useEffect } from 'react';
import { FileText, Mail, ArrowRight, Zap, Target, Users, Search, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  useEffect(() => {
    // Simplified animation on scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .stagger-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'Claude', 'Bolt', 'Supabase', 'Stripe', 'GPT-4', 'Gemini', 'Make',
    'Google Cloud', 'LangChain', 'JavaScript', 'APIs', 'No-Code', 'AI Agents'
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-black mb-6">About Pattern3 LLC</h1>
              <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
              <p className="fade-in-up text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
                AI strategy, automation, and design-forward tools that bridge technology and human connection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Pattern3 Does Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
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
          </div>
        </div>
      </div>

      {/* Will's Story Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">Meet Will Patterson</h2>
                <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="slide-in-left">
                  <div className="card p-0 overflow-hidden">
                    <picture>
                      <source type="image/avif" srcSet="/images/profile/headshot.avif 1x" />
                      <source type="image/webp" srcSet="/images/profile/headshot.webp 1x" />
                      <img
                        src="/images/profile/headshot.jpg"
                        alt="Will Patterson - Founder of Pattern3 LLC"
                        width="600"
                        height="800"
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
          </div>
        </div>
      </div>

      {/* The Pattern3 Way Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">The Pattern3 Way</h2>
                <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
                <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                  Our methodology emphasizes narrative-driven, visual-first, no-code enabled builds.
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
                  <div key={index} className={`stagger-fade-in bg-gradient-to-br ${item.bgGradient} card text-center h-full flex flex-col`} style={{ animationDelay: item.delay }}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg flex-shrink-0`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 flex-shrink-0">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finding the Pattern Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6">Finding the Pattern</h2>
                <div className="fade-in-up w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
                <p className="fade-in-up text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                  At Pattern3, we believe every business challenge has a pattern — a repeatable solution that combines design thinking, cutting-edge technology, and human-centered approach.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {[
                  {
                    number: "1",
                    icon: Search,
                    title: "Discover",
                    description: "We identify the patterns in your workflow and uncover opportunities for AI enhancement.",
                    delay: "0s"
                  },
                  {
                    number: "2",
                    icon: Lightbulb,
                    title: "Design",
                    description: "We craft human-centered solutions that feel intuitive and align with your business goals.",
                    delay: "0.1s"
                  },
                  {
                    number: "3",
                    icon: Rocket,
                    title: "Deploy",
                    description: "We implement cutting-edge AI tools that integrate seamlessly into your existing systems.",
                    delay: "0.2s"
                  }
                ].map((item, index) => (
                  <div key={index} className={`stagger-fade-in text-center`} style={{ animationDelay: item.delay }}>
                    {/* Clean Apple-style number */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <span className="text-2xl font-bold text-gray-900">{item.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Tools Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
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
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="card bg-gradient-to-br from-primary/5 to-accent/5 border-gradient text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">Ready to Start Your AI Journey?</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss how Pattern3 LLC can help transform your business with human-centered AI solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    href="/start"
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
    </div>
  );
};

export default AboutPage;