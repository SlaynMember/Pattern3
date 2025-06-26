import { useRef, useState } from 'react';
import { ArrowRight, Check, Users, Building, Stethoscope, UserCheck, FileText, MessageCircle, Video, Plus, Shield } from 'lucide-react';
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center pt-32 md:pt-0">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hey, I'm <span className="text-primary">Will</span>
                <br />
                Founder of Pattern<span className="text-primary">3</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                I bridge the gap between design, technology, and human connection. Through Pattern3 LLC, 
                we create AI-powered solutions that transform how people interact with technology.
              </p>
              <button 
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md transition hover:bg-gray-800"
              >
                Book Free Consultation <ArrowRight size={16} />
              </button>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl transform md:translate-y-4">
              <img
                src="/images/profile/headshot.jpg"
                alt="Will - Founder of Pattern3"
                className="w-full h-auto object-cover"
              />
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
      <section ref={bioRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Why Pattern3</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
            </div>
            
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                  AI That's Fast, Friendly, and Built for Real Businesses
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Tailored solutions for small teams — no dev team needed
                    </p>
                  </div>
                  
                  <div className="h-px bg-gray-200 mx-4"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Human-first automations that match your voice
                    </p>
                  </div>
                  
                  <div className="h-px bg-gray-200 mx-4"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Built with real tools like GPT-4, Supabase, Make
                    </p>
                  </div>
                  
                  <div className="h-px bg-gray-200 mx-4"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Done-for-you systems in days, not months
                    </p>
                  </div>
                  
                  <div className="h-px bg-gray-200 mx-4"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Designed by someone who's actually worked in the field
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 opacity-20">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              After Our Live Google Meet Call, You'll Receive:
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Whether you upgrade or not, you'll walk away with clarity and momentum.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#6ba1a3]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">PDF Roadmap</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized with automation opportunities and quick wins for your specific business.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-[#6ba1a3]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">System Analysis</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A walkthrough of your current system bottlenecks and inefficiencies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-[#6ba1a3]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Follow-up Calls</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  1–2 follow-up calls with tailored updates and action plans.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-[#6ba1a3]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Visual Breakdown</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A fully visual breakdown of what your business could look like with modern AI tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Who It's For
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Healthcare Clinics</h3>
                <p className="text-gray-700 leading-relaxed">
                  Drowning in paperwork and manual processes? 
                  We'll show you where AI can save hours daily.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Solo Founders</h3>
                <p className="text-gray-700 leading-relaxed">
                  Overwhelmed by AI tool options? We'll cut through 
                  the noise and focus on what actually moves your business.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Businesses</h3>
                <p className="text-gray-700 leading-relaxed">
                  Running on outdated systems? Discover simple AI upgrades 
                  that don't require a tech team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our latest projects where we've successfully bridged design, technology, 
              and human connection to create impactful solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md transition hover:bg-gray-800"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to discover your AI opportunities?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Book your free consultation with Pattern3 LLC and get a clear roadmap for your business.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 text-lg font-semibold shadow-lg"
            >
              <ArrowRight className="w-5 h-5" />
              Book Free Consultation
            </button>
            <p className="text-sm text-white/80 mt-4">
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