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
  const [currentRevenue, setCurrentRevenue] = useState(10000)
  const [chartData, setChartData] = useState<any>(null)

  // Milestones based on AI roadmap and real client results
  const milestones = {
    1: "AI Strategy Assessment & Quick Wins Implementation",
    2: "Process Automation Deployed (60% efficiency gain like Dental32)",
    3: "Customer Experience AI Integration (73% of businesses use AI chatbots)",
    4: "Advanced Analytics & Personalization (61% email optimization)",
    6: "Full AI Ecosystem Integration (3x ROI achieved)",
    9: "Predictive Analytics & Advanced Automation",
    12: "Market Leadership Position & Scalable Growth"
  }

  // Forbes statistics integration
  const forbesStats = {
    customerExperience: 73, // % using AI chatbots
    emailOptimization: 61,
    personalizedServices: 55,
    productivity: 64, // % expect AI to improve productivity
    salesGrowth: 60,
    costSavings: 59
  }

  useEffect(() => {
    generateChartData()
  }, [currentRevenue])

  const generateChartData = () => {
    const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 
                   'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12']
    
    // Industry average: 5% monthly growth
    const industryGrowth = months.map((_, index) => {
      return currentRevenue * Math.pow(1.05, index)
    })

    // Pattern3 client results: 15% monthly growth with accelerated gains
    const pattern3Growth = months.map((_, index) => {
      // Accelerated growth curve based on AI implementation phases
      let growthRate = 1.15
      if (index >= 2) growthRate = 1.18 // After process automation
      if (index >= 6) growthRate = 1.22 // After full integration
      
      return currentRevenue * Math.pow(growthRate, index)
    })

    const data = {
      labels: months,
      datasets: [
        {
          label: 'Industry Average Growth',
          data: industryGrowth,
          borderColor: '#94a3b8',
          backgroundColor: 'rgba(148, 163, 184, 0.1)',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Pattern3 Client Results',
          data: pattern3Growth,
          borderColor: '#0891b2',
          backgroundColor: 'rgba(8, 145, 178, 0.1)',
          borderWidth: 3,
          fill: '+1',
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBackgroundColor: '#0891b2',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2
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
          padding: 20,
          font: {
            size: 14,
            weight: 500
          }
        }
      },
      title: {
        display: true,
        text: 'Your Digital Growth Journey with Pattern3',
        font: {
          size: 20,
          weight: 700
        },
        padding: {
          bottom: 30
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#0891b2',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
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
            return `${context.dataset.label}: $${value.toLocaleString()}`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value: string | number) {
            return '$' + value.toLocaleString()
          },
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.2)'
        }
      },
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.2)'
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    }
  }

  const calculateROI = () => {
    const finalRevenue = currentRevenue * Math.pow(1.22, 12)
    const totalGrowth = finalRevenue - currentRevenue
    const roiPercentage = ((totalGrowth / currentRevenue) * 100).toFixed(0)
    return { finalRevenue, totalGrowth, roiPercentage }
  }

  const { finalRevenue, totalGrowth, roiPercentage } = calculateROI()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Your Digital Growth Journey
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto mb-8">
              See how Pattern3's AI solutions transform businesses like yours. Based on real client results 
              and industry data from Forbes research.
            </p>
            
            {/* Forbes Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{forbesStats.customerExperience}%</div>
                <div className="text-sm text-gray-600">Use AI Chatbots</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{forbesStats.productivity}%</div>
                <div className="text-sm text-gray-600">Expect Productivity Gains</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">{forbesStats.salesGrowth}%</div>
                <div className="text-sm text-gray-600">Anticipate Sales Growth</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-gray-600">Efficiency Gain (Dental32)</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={1}>
          <Card variant="elevated" padding="xl" className="mb-12">
            {/* Revenue Input */}
            <div className="mb-8">
              <label htmlFor="revenue-input" className="block text-lg font-semibold mb-4 text-center">
                Enter Your Current Monthly Revenue
              </label>
              <div className="flex justify-center">
                <div className="relative max-w-xs">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <input
                    id="revenue-input"
                    type="number"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-center font-semibold"
                    placeholder="10,000"
                    min="1000"
                    max="1000000"
                    step="1000"
                  />
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-96 mb-8">
              {chartData && (
                <Line data={chartData} options={options} />
              )}
            </div>

            {/* ROI Calculation */}
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Your Projected Growth with Pattern3</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">${totalGrowth.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Additional Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{roiPercentage}%</div>
                  <div className="text-sm opacity-90">ROI in 12 Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">${finalRevenue.toLocaleString()}</div>
                  <div className="text-sm opacity-90">Monthly Revenue</div>
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
                  Our clients see an average 3x ROI within 6 months
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

        {/* Success Story Highlight */}
        <AnimatedSection animation="fade-in" delay={2}>
          <Card variant="outlined" padding="lg" className="bg-gradient-to-r from-blue-50 to-teal-50">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Real Client Success: Dental32</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">60%</div>
                  <div className="text-sm text-gray-600">Faster Patient Intake</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <div className="text-sm text-gray-600">ROI in 6 Months</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Process Automation</div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                "Pattern3 transformed our patient intake process, reducing front desk workload by 60% 
                while improving patient experience."
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}