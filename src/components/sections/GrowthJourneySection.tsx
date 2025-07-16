import { useState, useEffect, useRef } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import AnimatedSection from '../ui/AnimatedSection'

export default function GrowthJourneySection() {
  const [visiblePhases, setVisiblePhases] = useState<boolean[]>([false, false, false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  const phases = [
    {
      emoji: "👨‍🔧",
      title: "Before Pattern3",
      description: "Scrambling between emails, sticky notes, and spreadsheets",
      timeframe: "Current State"
    },
    {
      emoji: "⚙️",
      title: "Workflow Clarity",
      description: "Automations, SOPs, and forms start saving time daily",
      timeframe: "Month 1–3"
    },
    {
      emoji: "📈",
      title: "Measurable Gains",
      description: "AI agents handling responses, data captured in Supabase",
      timeframe: "Month 4–6"
    },
    {
      emoji: "🤖",
      title: "Full AI Assist",
      description: "GPT writes emails, chats with leads, trains your staff",
      timeframe: "Month 7–9"
    },
    {
      emoji: "🚀",
      title: "Scaled System",
      description: "Site, tools, and automations are live — you're a machine",
      timeframe: "Month 10–12"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of each phase
          phases.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePhases(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 300) // 300ms stagger between each phase
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              🌀 From Stuck to Scaling: The Pattern3 Journey
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto mb-8">
              Watch how businesses transform from chaos to clarity with our proven AI implementation process.
            </p>
          </div>
        </AnimatedSection>

        <div ref={sectionRef}>
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-primary to-accent transform -translate-y-1/2 z-0"></div>
              
              {/* Phase Cards */}
              <div className="relative z-10 flex justify-between items-center">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-700 ease-out ${
                      visiblePhases[index] 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg mb-4 transition-colors duration-500 ${
                      visiblePhases[index] ? 'bg-primary' : 'bg-gray-300'
                    }`}></div>
                    
                    {/* Phase Card */}
                    <Card 
                      variant="elevated" 
                      padding="md" 
                      className={`w-48 text-center transform transition-all duration-500 ${
                        visiblePhases[index] ? 'scale-100' : 'scale-95'
                      }`}
                    >
                      <div className="text-4xl mb-3">{phase.emoji}</div>
                      <div className="text-xs font-medium text-primary mb-2">{phase.timeframe}</div>
                      <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Swipe Carousel */}
          <div className="md:hidden mb-16">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide px-4">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 transition-all duration-700 ease-out ${
                    visiblePhases[index] 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Card variant="elevated" padding="lg" className="text-center h-full">
                    <div className="text-6xl mb-4">{phase.emoji}</div>
                    <div className="text-sm font-medium text-primary mb-3">{phase.timeframe}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <AnimatedSection animation="fade-in" delay={2}>
          <div className="text-center mb-12">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg font-semibold">
              <div className="flex items-center">
                <span className="text-primary">60%</span>
                <span className="text-gray-600 ml-2">Faster Workflows</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-primary">6+</span>
                <span className="text-gray-600 ml-2">Hours Saved Weekly</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-primary">3x</span>
                <span className="text-gray-600 ml-2">More Organized Teams</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="scale" delay={3}>
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                See where you'd be by Month 3
              </h3>
              <p className="text-gray-600">
                Book a free strategy call and get your personalized transformation roadmap
              </p>
            </div>
            
            <Button variant="primary" size="lg" href="/start" className="mb-4">
              Book a Free Strategy Call
            </Button>
            
            <div className="text-sm text-gray-500">
              Free consultation • No commitment required • Get your personalized roadmap
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}