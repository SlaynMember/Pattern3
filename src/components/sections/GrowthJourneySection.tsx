import { useState, useEffect, useRef } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import AnimatedSection from '../ui/AnimatedSection'

export default function GrowthJourneySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProgress, setCurrentProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Enhanced milestones with benefits
  const milestones = [
    {
      month: 1,
      title: "AI Strategy Assessment",
      benefit: "Identify quick wins and create your personalized roadmap"
    },
    {
      month: 2,
      title: "Process Automation",
      benefit: "Save 6+ hours per week with automated workflows"
    },
    {
      month: 3,
      title: "Customer Experience AI",
      benefit: "73% of businesses use AI chatbots for better service"
    },
    {
      month: 4,
      title: "Advanced Analytics",
      benefit: "61% improvement in email optimization and targeting"
    },
    {
      month: 6,
      title: "Full AI Ecosystem",
      benefit: "Achieve 3x ROI with integrated AI solutions"
    },
    {
      month: 9,
      title: "Predictive Analytics",
      benefit: "Anticipate customer needs and market trends"
    },
    {
      month: 12,
      title: "Market Leadership",
      benefit: "Establish competitive advantage with AI-first approach"
    }
  ]

  // Updated statistics with proper context
  const businessStats = {
    efficiency: 60, // Real client result from Dental32
    chatbots: 73, // Companies using AI chatbots this year
    productivity: 64, // Companies expecting AI to improve productivity this year
    salesGrowth: 60 // Companies anticipating sales growth from AI this year
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress from 0 to 300% over 2 seconds
          let progress = 0
          const interval = setInterval(() => {
            progress += 5
            setCurrentProgress(progress)
            if (progress >= 300) {
              clearInterval(interval)
            }
          }, 33) // ~30fps animation
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Circular progress component
  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 80
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 300) * circumference

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">
              {Math.round(progress)}%
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Growth Potential
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mobile stat badges
  const StatBadge = ({ period, growth, delay }: { period: string; growth: string; delay: number }) => (
    <AnimatedSection animation="scale" delay={delay}>
      <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6 text-center">
        <div className="text-sm opacity-90 mb-2">{period}</div>
        <div className="text-3xl font-bold">{growth}</div>
      </div>
    </AnimatedSection>
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Your Digital Growth Journey
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto mb-8">
              See the growth potential when AI meets strategic implementation. Based on real client results 
              and industry trends from leading businesses.
            </p>
            
            {/* Updated Statistics with Context */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.efficiency}%</div>
                <div className="text-sm text-gray-600">Efficiency Gain (Dental32)</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.chatbots}%</div>
                <div className="text-sm text-gray-600">Companies Using AI Chatbots This Year</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.productivity}%</div>
                <div className="text-sm text-gray-600">Companies Expecting Productivity Gains This Year</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.salesGrowth}%</div>
                <div className="text-sm text-gray-600">Companies Anticipating Sales Growth This Year</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={1}>
          <Card variant="elevated" padding="xl" className="mb-12">
            <div ref={sectionRef}>
              {/* Desktop: Circular Progress */}
              <div className="hidden md:block">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Typical Growth Curve (12-Month Journey)
                </h3>
                <CircularProgress progress={currentProgress} />
                <div className="text-center mt-6">
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Watch your business transform with strategic AI implementation. 
                    Our clients typically see exponential growth as systems mature and integrate.
                  </p>
                </div>
              </div>

              {/* Mobile: Stat Badges */}
              <div className="md:hidden">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Your Growth Timeline
                </h3>
                <div className="space-y-4">
                  <StatBadge period="Month 1–3" growth="+50%" delay={1} />
                  <StatBadge period="Month 4–7" growth="+120%" delay={2} />
                  <StatBadge period="Month 8–12" growth="+300%" delay={3} />
                </div>
              </div>
            </div>

            {/* AI Implementation Milestones */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-12">AI Implementation Milestones</h3>
              
              {/* Desktop: 3 cards per row */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {milestones.map((milestone, index) => (
                  <AnimatedSection key={milestone.month} animation="scale" delay={index * 0.1 + 1}>
                    <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm font-medium text-primary mb-2">
                        Month {milestone.month}
                      </div>
                      <div className="font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {milestone.benefit}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Mobile: Horizontal scroll */}
              <div className="md:hidden">
                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={milestone.month}
                      className="flex-shrink-0 w-80 bg-white rounded-xl p-6 border-l-4 border-primary shadow-sm"
                    >
                      <div className="text-sm font-medium text-primary mb-2">
                        Month {milestone.month}
                      </div>
                      <div className="font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {milestone.benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to unlock your growth potential?
                </div>
                <div className="text-gray-600">
                  Join businesses already transforming with AI
                </div>
              </div>
              
              <Button variant="primary" size="lg" href="/start" className="mb-4">
                Schedule Your Growth Strategy Session
              </Button>
              
              <div className="text-sm text-gray-500">
                Free consultation • No commitment required • Get your personalized roadmap
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}