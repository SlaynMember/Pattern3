import { Play } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import Icon from '../ui/Icon'
import Card from '../ui/Card'
import Button from '../ui/Button'
import OptimizedImage from '../ui/OptimizedImage'
import ClientTrustBanner from '../sections/ClientTrustBanner'
import ConsultationModal from '../ui/ConsultationModal'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="heading-1 mb-6">
                Buy back your week with{' '}
                <span className="text-gradient">AI automation</span>.
              </h1>
              <p className="body-large text-gray-600 mb-8">
                We turn repetitive tasks into button-click flows for SMB teams — no dev team required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Start Free Consultation <Icon name="arrow" className="ml-2" />
                </Button>
                <Button variant="outline" href="/work">
                  <Play className="mr-2 w-5 h-5" />
                  View Past Work
                </Button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <OptimizedImage
                src="/images/profile/B&Wheadshot.jpg" 
                alt="Will Patterson – AI consultant smiling"
                width={1902}
                height={2536}
                priority={true}
                className="w-80 h-80 object-cover object-top rounded-2xl mx-auto lg:ml-auto shadow-2xl"
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Growth Journey Section */}

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="heading-2 mb-4">
                What We Do
            </h2>
            </AnimatedSection>
          </div>

          {/* Problem */}
          <div className="mb-20">
            <AnimatedSection animation="fade-in" delay={1}>
              <h3 className="heading-3 text-center mb-12">The Messy Middle</h3>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <AnimatedSection animation="scale" delay={1}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">Field</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3">Field Operations</h4>
                  <p className="text-gray-600 text-sm">Scattered data collection</p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={2}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">Office</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3">Office Management</h4>
                  <p className="text-gray-600 text-sm">Manual data entry</p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={3}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">Clients</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3">Client Communication</h4>
                  <p className="text-gray-600 text-sm">Inconsistent follow-ups</p>
                </Card>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fade-in" delay={4}>
              <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
                Excel sheets, sticky notes and endless reminders drain <strong>7.5 hours a week</strong> from your team.
              </p>
            </AnimatedSection>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <AnimatedSection animation="fade-in" delay={1}>
              <h3 className="heading-3 text-center mb-12">Your New AI Teammate</h3>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in" delay={2}>
                <div className="flex items-center justify-center space-x-4 text-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <span className="ml-3 font-medium">Discovery</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <span className="ml-3 font-medium">KB Build</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <span className="ml-3 font-medium">Prototype</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <span className="ml-3 font-medium">Rollout</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <span className="ml-3 font-medium">Handoff</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Outcome */}
          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={1}>
              <h3 className="heading-3 text-center mb-12">4–6 Weeks Later</h3>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale" delay={1}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="check-circle" size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Invoices Auto-Drafted</h4>
                  <p className="text-gray-600">Your billing process runs on autopilot</p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={2}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="automation" size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Equipment PM Alerts</h4>
                  <p className="text-gray-600">Preventive maintenance happens automatically</p>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={3}>
                <Card className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="users" size="lg" className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Managers Regain Fridays</h4>
                  <p className="text-gray-600">Focus on growth, not paperwork</p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="heading-2 mb-4">
              Who It's For
            </h2>
            </AnimatedSection>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="scale" delay={1}>
              <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name="healthcare" size="lg" className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Healthcare Offices</h3>
              <p className="body-base text-gray-600">
                Streamline patient intake and appointment scheduling while maintaining HIPAA compliance and improving patient experience.
              </p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={2}>
              <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name="strategy" size="lg" className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Solo Founders</h3>
              <p className="body-base text-gray-600">
                Automate the boring stuff so you can focus on what matters: building great products and serving customers.
              </p>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={3}>
              <Card hover className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon name="users" size="lg" className="text-white" />
              </div>
              <h3 className="heading-3 mb-4">Local Businesses</h3>
              <p className="body-base text-gray-600">
                Compete with the big players using AI-powered customer service, inventory management, and marketing automation.
              </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="heading-2 mb-4">
              Featured Work
            </h2>
              <p className="body-large text-gray-600">
              Real solutions for real businesses — see how we've helped others bridge technology and human connection.
            </p>
            </AnimatedSection>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection animation="scale" delay={1}>
              <Card hover className="group cursor-pointer" onClick={() => window.location.href = '/work/d32-text-rewriter'}>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <OptimizedImage
                  src="/images/projects/rewriter/cover.png" 
                  alt="D32 Text Message Re-Writer"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                D32 Text Message Re-Writer
              </h3>
              <p className="body-base text-gray-600 mb-4">
                Saved Dental32's front desk 2+ hours daily while keeping all communications on-brand and error-free.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Content Creation
              </span>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={2}>
              <Card hover className="group cursor-pointer" onClick={() => window.location.href = '/work/echo-transcription'}>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <OptimizedImage
                  src="/images/projects/echo/cover.png" 
                  alt="Echo - AI Transcription"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Echo - AI Transcription
              </h3>
              <p className="body-base text-gray-600 mb-4">
                Saved healthcare assistants 4+ hours daily on chart notes while keeping PHI fully secure and compliant.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Healthcare
              </span>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={3}>
              <Card hover className="group cursor-pointer" onClick={() => window.location.href = '/work/brand-builder'}>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <OptimizedImage
                  src="/images/projects/ai automation/Pattern3Automation.png" 
                  alt="AI Automation - Brand Builder"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                AI Automation - Brand Builder
              </h3>
              <p className="body-base text-gray-600 mb-4">
                Allowed solo founder Claire to completely automate her marketing business lead intake, saving 1-2 hours daily.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Automation
              </span>
              </Card>
            </AnimatedSection>
          </div>
          
          <ClientTrustBanner />
          
          <div className="text-center">
            <AnimatedSection animation="fade-in" delay={2}>
              <Button variant="outline" href="/work">
                View All Work <Icon name="arrow" className="ml-2" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      </div>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}