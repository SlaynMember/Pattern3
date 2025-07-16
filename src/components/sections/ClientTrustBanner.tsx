import AnimatedSection from '../ui/AnimatedSection'
import OptimizedImage from '../ui/OptimizedImage'

export default function ClientTrustBanner() {
  const clients = [
    {
      name: 'Dental32',
      logo: '/images/logos/dental32logopng.PNG',
      alt: 'Dental32 - Healthcare Practice'
    },
    {
      name: 'Clark',
      logo: '/images/logos/clark.png',
      alt: 'Clark - Professional Services'
    },
    {
      name: 'Legacy Blue',
      logo: '/images/logos/legacyblue.png',
      alt: 'Legacy Blue - Business Solutions'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Forward-Thinking Companies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join these innovative businesses who have transformed their operations with Pattern3's AI solutions
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-6 md:space-x-12 lg:space-x-16 px-4">
            {clients.map((client, index) => (
              <AnimatedSection key={client.name} animation="scale" delay={index + 1}>
                <div className="flex items-center justify-center h-12 w-20 sm:h-16 sm:w-32 md:h-20 md:w-40">
                  <OptimizedImage
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    priority={true}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              "Pattern3 transformed our operations with 60% efficiency gains and 3x ROI in just 6 months"
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}