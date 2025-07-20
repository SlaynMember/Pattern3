import { Play } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Icon from '../ui/Icon'
import Card from '../ui/Card'
import Button from '../ui/Button'
import OptimizedImage from '../ui/OptimizedImage'
import ClientTrustBanner from '../sections/ClientTrustBanner'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="heading-1 mb-6">
                AI Solutions for the{' '}
                <span className="text-gradient">Little Guys</span>
              </h1>
              <p className="body-large text-gray-600 mb-8">
                Pattern3 LLC brings enterprise-level AI to small businesses, solo entrepreneurs, 
                and creative teams. No dev team or massive budget required — just smart solutions 
                that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/start">
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
                src="/images/headshot.jpg" 
                alt="Will Patterson - Founder of Pattern3"
                width={320}
                height={320}
                priority={true}
                className="w-80 h-80 object-cover rounded-2xl mx-auto lg:ml-auto shadow-2xl"
              />
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Growth Journey Section */}

      {/* Why Pattern3 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <h2 className="heading-2 mb-4">
              Why Pattern3 LLC
            </h2>
              <p className="body-large text-gray-600 max-w-2xl mx-auto">
              We don't just implement AI — we craft experiences where AI meets human creativity.
            </p>
            </AnimatedSection>
          </div>

          <div className="mb-16">
            <AnimatedSection animation="fade-in" delay={1}>
              <h3 className="heading-3 text-center mb-12">
              Human-Centered, Design-Driven AI Solutions
            </h3>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="scale" delay={1}>
                <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="check-circle" size="lg" className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Accessible to Everyone</h4>
                <p className="body-small text-gray-600">
                  Streamlined for small teams without advanced technical expertise or IT departments.
                </p>
              </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={2}>
                <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="lightning" size="lg" className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Design-Forward Solutions</h4>
                <p className="body-small text-gray-600">
                  Beautiful, intuitive interfaces that make AI feel like a natural extension of your workflow.
                </p>
              </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={3}>
                <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="target" size="lg" className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Rapid Implementation</h4>
                <p className="body-small text-gray-600">
                  Custom-built solutions that ship fast and see real creative gains, not just automation wins.
                </p>
              </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale" delay={4}>
                <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon name="users" size="lg" className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Focus on the Biz</h4>
                <p className="body-small text-gray-600">
                  Powerful tech behind the scenes while understanding of your business challenges.
                </p>
              </div>
              </AnimatedSection>
            </div>
          </div>

          {/* After Our Live Google Meet Call Section */}
          <AnimatedSection animation="fade-in" delay={2}>
            <Card variant="elevated" padding="xl" className="bg-gray-50">
              <h3 className="heading-3 text-center mb-8">
              After Our Live Google Meet Call, You'll Receive:
            </h3>
              <p className="body-large text-center text-gray-600 mb-12">
              A personalized AI roadmap, no strings attached — even if you don't move forward.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h4 className="text-xl font-bold mb-3">PDF Roadmap</h4>
                <p className="body-small text-gray-600">
                  A comprehensive roadmap outlining your AI implementation strategy and timeline.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h4 className="text-xl font-bold mb-3">System Analysis</h4>
                <p className="body-small text-gray-600">
                  Detailed analysis of your current systems and integration opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Follow-up Call</h4>
                <p className="body-small text-gray-600">
                  A follow-up session to discuss the roadmap and answer any questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Cloud Breakdown</h4>
                <p className="body-small text-gray-600">
                  A breakdown of cloud infrastructure and ongoing costs for your solution.
                </p>
              </div>
            </div>
            </Card>
          </AnimatedSection>
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
                Built a custom chatbot assistant to help Darnell32 turn basic staff communication into professional, branded messaging.
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
                Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.
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
                Built a fully automated workflow that takes brand inputs and creates comprehensive brand guidelines, assets, and advanced automations.
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
  )
}