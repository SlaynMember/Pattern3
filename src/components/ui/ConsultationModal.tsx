import { useState, useEffect, useRef } from 'react'
import { X, Calendar } from 'lucide-react'
import ConsultationForm from '../forms/ConsultationForm'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Focus management and escape key handling
  useEffect(() => {
    if (isOpen) {
      // Focus the modal when it opens
      modalRef.current?.focus()
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.body.style.overflow = 'unset'
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen, onClose])

  const handleSuccess = () => {
    // Close modal after successful submission
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900">Start Your Free AI Consultation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <ConsultationForm
            sourcePage={window.location.pathname}
            onSuccess={handleSuccess}
            showTitle={false}
            compact={true}
          />
          
          <div className="mt-6 text-center text-gray-600">
            <p className="text-sm mb-2">
              Tell me about your business and I'll provide a personalized AI roadmap at no cost.
            </p>
            <p className="text-xs text-gray-500">
              After submitting, you'll be directed to schedule your meeting time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}