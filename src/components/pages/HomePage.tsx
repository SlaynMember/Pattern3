import { Play } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import Icon from '../ui/Icon'
import Card from '../ui/Card'
import Button from '../ui/Button'
import AdvancedOptimizedImage from '../ui/AdvancedOptimizedImage'
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
                <span className="text-gradient">AI automation.</span>
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
              <AdvancedOptimizedImage
                src="/images/profile/B&Wheadshot.jpg" 
                alt="Will Patterson – AI consultant smiling"
                width={1902}
                height={2536}
                priority={true}
                className="w-80 h-80 object-cover object-top rounded-2xl mx-auto lg:ml-auto shadow-2xl"
                style={{ objectPosition: '30% 5%' }}
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Turn Chaos into Clarity Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="heading-2 mb-4">
                How We Turn Chaos into <span className="text-gradient">Clarity</span>
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Follow Jane, a real-world owner who escaped the "messy middle" with Pattern3.
              </p>
            </AnimatedSection>
          </div>

          {/* Jane's Journey - Step Cards */}
          <div className="mb-16">
            {/* Desktop: Horizontal Layout */}
            <div className="hidden md:block">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                {[
                  {
                    number: "1",
                    title: "The Struggle",
                    description: "Jane's team was drowning in paperwork, missed hand-offs and late invoices.",
                    emoji: "😰",
                    bgColor: "from-red-500 to-red-600"
                  },
                  {
                    number: "2", 
                    title: "Find the Clutter",
                    description: "We mapped every copy-paste loop and flagged the hours lost to data entry.",
                    emoji: "🔍",
                    bgColor: "from-yellow-500 to-yellow-600"
                  },
                  {
                    number: "3",
                    title: "Clear the Mess", 
                    description: "Smart automations filed docs, synced systems and saved 7.5 hours a week.",
                    emoji: "⚡",
                    bgColor: "from-blue-500 to-blue-600"
                  },
                  {
                    number: "4",
                    title: "Success",
                    description: "Jane now spends Fridays on growth projects, not spreadsheets.",
                    emoji: "🚀",
                    bgColor: "from-green-500 to-green-600"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <AnimatedSection animation="scale" delay={index + 1}>
                      <Card className="w-64 text-center" padding="lg">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                          <span className="text-2xl">{step.emoji}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-gray-900">
                          {step.number} · {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </Card>
                    </AnimatedSection>
                    
                    {/* Arrow between cards */}
                    {index < 3 && (
                      <div className="mx-4 text-primary hover:text-primary-dark transition-colors">
                        <Icon name="arrow" size="lg" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile: Vertical Layout */}
            <div className="md:hidden space-y-6">
              {[
                {
                  number: "1",
                  title: "The Struggle",
                  description: "Jane's team was drowning in paperwork, missed hand-offs and late invoices.",
                  emoji: "😰",
                  bgColor: "from-red-500 to-red-600"
                },
                {
                  number: "2", 
                  title: "Find the Clutter",
                  description: "We mapped every copy-paste loop and flagged the hours lost to data entry.",
                  emoji: "🔍",
                  bgColor: "from-yellow-500 to-yellow-600"
                },
                {
                  number: "3",
                  title: "Clear the Mess", 
                  description: "Smart automations filed docs, synced systems and saved 7.5 hours a week.",
                  emoji: "⚡",
                  bgColor: "from-blue-500 to-blue-600"
                },
                {
                  number: "4",
                  title: "Success",
                  description: "Jane now spends Fridays on growth projects, not spreadsheets.",
                  emoji: "🚀",
                  bgColor: "from-green-500 to-green-600"
                }
              ].map((step, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index + 1}>
                  <Card className="text-center" padding="lg">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-2xl">{step.emoji}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {step.number} · {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                  
                  {/* Downward arrow on mobile */}
                  {index < 3 && (
                    <div className="flex justify-center my-4 text-primary">
                      <Icon name="arrow-up" size="lg" className="transform rotate-180" />
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          {/* Ready to Declutter CTA */}
          <AnimatedSection animation="fade-in" delay={5}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to declutter your business?
              </h3>
              <Button variant="primary" onClick={() => setIsModalOpen(true)} className="mb-4">
                Book My Free Consult
              </Button>
              <p className="text-xs text-gray-500">
                No pitch – we show your savings first.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Trust Banner */}
      <ClientTrustBanner />

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
                <Icon name="medical-cross" size="lg" className="text-white" />
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