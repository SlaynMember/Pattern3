import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Check, Users, Building, Stethoscope, UserCheck, FileText, MessageCircle, Video, Plus, Shield, Zap, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { useProjectContext } from '../hooks/useProjectContext';
import RoadmapBookingModal from '../components/RoadmapBookingModal';

const HomePage = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const { projects } = useProjectContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get specific projects for featured work
  const featuredProjects = [
    projects.find(p => p.id === 'd32-text-rewriter'),
    projects.find(p => p.id === 'echo'),
    projects.find(p => p.id === 'ai-automation')
  ].filter(Boolean);

  const scrollToBio = () => {
    bioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Elements */}
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-12">
            <div className="lg:w-3/5 text-left">
              <h1 className="slide-in-left text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                AI Solutions for the <span className="text-gradient">"Little Guys"</span>
              </h1>
              <p className="slide-in-left text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Pattern3 LLC brings enterprise-level AI to small businesses, solo founders, and creative teams. 
                No dev team or massive budget required — just smart solutions that work.
              </p>
              <div className="slide-in-left flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.4s' }}>
                <button 
                  onClick={openModal}
                  className="btn-primary inline-flex items-center gap-3 text-lg"
                >
                  Book Free Consultation <ArrowRight size={20} />
                </button>
                <Link
                  to="/work"
                  className="btn-outline inline-flex items-center gap-3 text-lg"
                >
                  View Case Studies
                </Link>
              </div>
              <p className="slide-in-left text-sm text-gray-500 mt-6" style={{ animationDelay: '0.6s' }}>
                Based in Oklahoma City, serving clients nationwide
              </p>
            </div>
            <div className="lg:w-2/5">
              <div className="scale-in rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/profile/headshot.jpg"
                  alt="Will Patterson - Founder of Pattern3 LLC"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToBio}
            aria-label="Scroll down"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowRight size={24} className="transform rotate-90" />
          </button>
        </div>
      </section>

      {/* Why Pattern3 Section */}
      <section ref={bioRef} className="section-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-black mb-6">Why Pattern3 LLC</h2>
              <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
              <p className="fade-in-up text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
                We don't just implement AI — we craft experiences where AI meets human creativity
              </p>
            </div>
            
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className="slide-in-left">
                <h3 className="text-3xl md:text-4xl font-black mb-10 text-gray-900">
                  Human-Centered, Design-Driven AI Solutions
                </h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="card-icon">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Accessible AI for everyone</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Solutions designed for small teams without enterprise budgets or IT departments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="card-icon">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Design meets technology</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Beautiful, intuitive systems that feel like creative partners, not just automation tools
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="card-icon">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Rapid implementation</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Launch your first AI-driven feature in weeks, not months, with zero-code prototypes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Visual */}
              <div className="slide-in-right relative">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="grid grid-cols-3 gap-8 opacity-30">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform rotate-12">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center transform -rotate-6">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform rotate-3">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center transform -rotate-12">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform rotate-6">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center transform -rotate-3">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-4xl md:text-5xl font-black mb-6 text-gray-900">
                After Our Live Google Meet Call, You'll Receive:
              </h2>
              <p className="fade-in-up text-xl text-gray-600 max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
                Whether you upgrade or not, you'll walk away with clarity and momentum.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  title: "PDF Roadmap",
                  description: "Personalized with automation opportunities and quick wins for your specific business.",
                  delay: "0s"
                },
                {
                  icon: UserCheck,
                  title: "System Analysis",
                  description: "A walkthrough of your current system bottlenecks and inefficiencies.",
                  delay: "0.1s"
                },
                {
                  icon: Video,
                  title: "Follow-up Calls",
                  description: "1–2 follow-up calls with tailored updates and action plans.",
                  delay: "0.2s"
                },
                {
                  icon: Plus,
                  title: "Visual Breakdown",
                  description: "A fully visual breakdown of what your business could look like with modern AI tools.",
                  delay: "0.3s"
                }
              ].map((item, index) => (
                <div key={index} className="stagger-fade-in card text-center" style={{ animationDelay: item.delay }}>
                  <div className="card-icon mx-auto">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-4xl md:text-5xl font-black mb-6 text-gray-900">
                Who It's For
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Stethoscope,
                  title: "Healthcare Clinics",
                  description: "Drowning in paperwork and manual processes? We'll show you where AI can save hours daily.",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-50 to-blue-100",
                  delay: "0s"
                },
                {
                  icon: Users,
                  title: "Solo Founders",
                  description: "Overwhelmed by AI tool options? We'll cut through the noise and focus on what actually moves your business.",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-50 to-purple-100",
                  delay: "0.1s"
                },
                {
                  icon: Building,
                  title: "Local Businesses",
                  description: "Running on outdated systems? Discover simple AI upgrades that don't require a tech team.",
                  gradient: "from-green-500 to-green-600",
                  bgGradient: "from-green-50 to-green-100",
                  delay: "0.2s"
                }
              ].map((item, index) => (
                <div key={index} className={`stagger-fade-in bg-gradient-to-br ${item.bgGradient} p-10 rounded-3xl text-center card`} style={{ animationDelay: item.delay }}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-4xl md:text-5xl font-black mb-6">Featured Work</h2>
            <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" style={{ animationDelay: '0.1s' }}></div>
            <p className="fade-in-up text-xl text-gray-700 max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Real solutions for real businesses — see how we've helped clients bridge technology and human connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="stagger-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/work"
              className="btn-primary inline-flex items-center gap-3 text-lg"
            >
              View All Case Studies <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="fade-in-up text-3xl md:text-4xl font-black mb-6 text-white">
              Ready to discover your AI opportunities?
            </h2>
            <p className="fade-in-up text-xl mb-10 text-gray-300" style={{ animationDelay: '0.1s' }}>
              Book your free consultation with Pattern3 LLC and get a clear roadmap for your business.
            </p>
            <button
              onClick={openModal}
              className="scale-in btn-accent inline-flex items-center gap-3 text-xl px-10 py-5" 
              style={{ animationDelay: '0.2s' }}
            >
              <ArrowRight className="w-6 h-6" />
              Book Free Consultation
            </button>
            <p className="fade-in-up text-sm text-gray-400 mt-6" style={{ animationDelay: '0.3s' }}>
              Live Google Meet call + personalized PDF roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      <RoadmapBookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;