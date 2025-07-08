import React, { useState } from 'react'
import { Mail, Instagram, ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            {/* Left Side - Brand */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/pattern3white.png" 
                  alt="Pattern3" 
                  className="h-8 w-auto"
                />
                <div>
                  <div className="font-bold text-lg">Pattern3 LLC</div>
                  <div className="text-sm text-gray-400">AI solutions for real businesses</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Powered by human-centered design. Serving clients nationwide.
              </p>
            </div>

            {/* Right Side - Contact */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex items-center space-x-6">
                <a 
                  href="mailto:will@pattern3.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  will@pattern3.com
                </a>
                <a 
                  href="https://instagram.com/pattern3solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @pattern3solutions
                </a>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary hover:text-primary-light font-medium transition-colors flex items-center"
              >
                Ready to start? <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Pattern3 LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}