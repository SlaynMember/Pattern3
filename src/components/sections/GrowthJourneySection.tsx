import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TooltipItem
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import Button from '../ui/Button'
import Card from '../ui/Card'
import AnimatedSection from '../ui/AnimatedSection'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default function GrowthJourneySection() {
  const [chartData, setChartData] = useState<any>(null)

  // Milestones based on AI roadmap and real client results
  const milestones = {
    1: "AI Strategy Assessment & Quick Wins Implementation",
    2: "Process Automation Deployed (60% efficiency gain like Dental32)",
    3: "Customer Experience AI Integration",
    4: "Advanced Analytics & Personalization",
    6: "Full AI Ecosystem Integration (3x ROI achieved)",
    9: "Predictive Analytics & Advanced Automation",
    12: "Market Leadership Position & Scalable Growth"
  }

  // Updated statistics with proper context
  const businessStats = {
    efficiency: 60, // Real client result from Dental32
    chatbots: 73, // Companies using AI chatbots this year
    productivity: 64, // Companies expecting AI to improve productivity this year
    salesGrowth: 60 // Companies anticipating sales growth from AI this year
  }

  useEffect(() => {
    generateChartData()
  }, [])

  const generateChartData = () => {
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 
                   'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12']
    
    // Baseline starting point (normalized to 100 for percentage growth)
    const baseline = 100
    
    // Industry average: modest 3-5% monthly growth
    const industryGrowth = months.map((_, index) => {
      return baseline * Math.pow(1.04, index)
    })

    // Pattern3 client potential: accelerated growth with AI implementation
    const pattern3Growth = months.map((_, index) => {
      // Realistic growth curve based on AI implementation phases
      let growthRate = 1.08 // 8% monthly growth initially
      if (index >= 2) growthRate = 1.12 // 12% after process automation
      if (index >= 6) growthRate = 1.15 // 15% after full integration
      
      return baseline * Math.pow(growthRate, index)
    })

    const data = {
      labels: months,
      datasets: [
        {
          label: 'Industry Average',
          data: industryGrowth,
          borderColor: '#94a3b8',
          backgroundColor: 'rgba(148, 163, 184, 0.1)',
          borderWidth: 3,
          fill: false,
          tension: 0.4,
          pointRadius: 6,
          pointHoverRadius: 10,
          pointBackgroundColor: '#94a3b8',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 3,
          pointHoverBackgroundColor: '#94a3b8',
          pointHoverBorderColor: '#ffffff',
          pointHoverBorderWidth: 4
        },
        {
          label: 'Pattern3 Client Potential',
          data: pattern3Growth,
          borderColor: '#0891b2',
          backgroundColor: 'rgba(8, 145, 178, 0.15)',
          borderWidth: 4,
          fill: '+1',
          tension: 0.4,
          pointRadius: 8,
          pointHoverRadius: 12,
          pointBackgroundColor: '#0891b2',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 3,
          pointHoverBackgroundColor: '#06b6d4',
          pointHoverBorderColor: '#ffffff',
          pointHoverBorderWidth: 4,
          // Add gradient effect
          borderCapStyle: 'round',
          borderJoinStyle: 'round'
        }
      ]
    }

    setChartData(data)
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 25,
          font: {
            size: 16,
            weight: 600,
            family: 'Inter'
          },
          color: '#1e293b'
        }
      },
      title: {
        display: true,
        text: 'Digital Growth Potential with AI Implementation',
        font: {
          size: 24,
          weight: 700,
          family: 'Inter'
        },
        color: '#1e293b',
        padding: {
          bottom: 40
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#0891b2',
        borderWidth: 2,
        cornerRadius: 12,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: 600,
          family: 'Inter'
        },
        bodyFont: {
          size: 13,
          family: 'Inter'
        },
        padding: 16,
        callbacks: {
          afterBody: function(context: TooltipItem<'line'>[]) {
            const monthIndex = context[0].dataIndex + 1
            if (milestones[monthIndex as keyof typeof milestones]) {
              return [`\n🎯 Milestone: ${milestones[monthIndex as keyof typeof milestones]}`]
            }
            return []
          },
          label: function(context: TooltipItem<'line'>) {
            const value = context.parsed.y
            const growth = ((value - 100)).toFixed(0)
            return `${context.dataset.label}: ${growth}% growth potential`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 80,
        ticks: {
          callback: function(value: string | number) {
            const growth = ((Number(value) - 100)).toFixed(0)
            return `+${growth}%`
          },
          font: {
            size: 12,
            family: 'Inter',
            weight: 500
          },
          color: '#64748b'
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.15)',
          lineWidth: 1
        },
        title: {
          display: true,
          text: 'Growth Percentage',
          font: {
            size: 14,
            weight: 600,
            family: 'Inter'
          },
          color: '#475569'
        }
      },
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.15)',
          lineWidth: 1
        },
        ticks: {
          font: {
            size: 12,
            family: 'Inter',
            weight: 500
          },
          color: '#64748b'
        },
        title: {
          display: true,
          text: 'Implementation Timeline',
          font: {
            size: 14,
            weight: 600,
            family: 'Inter'
          },
          color: '#475569'
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    },
    elements: {
      line: {
        borderCapStyle: 'round' as const,
        borderJoinStyle: 'round' as const
      }
    }
  }

  const calculatePotentialGrowth = () => {
    const finalGrowth = ((300 - 100)).toFixed(0) // 300% represents 3x growth
    return { 
      potentialGrowth: `${finalGrowth}%`,
      timeframe: '12 months',
      roiMultiplier: '3x'
    }
  }

  const { potentialGrowth, timeframe, roiMultiplier } = calculatePotentialGrowth()

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
            
            {/* Updated Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.efficiency}%</div>
                <div className="text-sm text-gray-600">Efficiency Gain (Dental32)</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.chatbots}%</div>
                <div className="text-sm text-gray-600">Companies Using AI Chatbots</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.productivity}%</div>
                <div className="text-sm text-gray-600">Expect Productivity Gains</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{businessStats.salesGrowth}%</div>
                <div className="text-sm text-gray-600">Anticipate Sales Growth</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={1}>
          <Card variant="elevated" padding="xl" className="mb-12">
            {/* Enhanced Chart */}
            <div className="h-96 mb-8 relative">
              {chartData && (
                <Line data={chartData} options={options} />
              )}
            </div>

            {/* Growth Potential Summary */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Growth Potential with Pattern3</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">{potentialGrowth}</div>
                  <div className="text-sm opacity-90">Growth Potential</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{roiMultiplier}</div>
                  <div className="text-sm opacity-90">ROI Multiplier</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{timeframe}</div>
                  <div className="text-sm opacity-90">Implementation Timeline</div>
                </div>
              </div>
            </div>

            {/* AI Implementation Timeline */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-center mb-6">AI Implementation Milestones</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(milestones).map(([month, milestone]) => (
                  <div key={month} className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
                    <div className="font-bold text-primary mb-2">Month {month}</div>
                    <div className="text-sm text-gray-700">{milestone}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
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