import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, FileText, MessageCircle, ArrowRight } from 'lucide-react';

const StartPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6ba1a3] to-transparent animate-pulse"></div>
        <div className="absolute w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#6ba1a3] opacity-20 animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 4 + 's',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-[#6ba1a3] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          {isScrolled && (
            <img
              src="/images/logos/pattern3black.png"
              alt="Pattern3 Logo"
              className="h-8"
            />
          )}
          <a
            href="mailto:william.n.patterson@gmail.com"
            className="px-4 py-2 bg-[#6ba1a3] text-white rounded-md hover:bg-[#4f8385] transition-colors text-sm font-medium"
          >
            Contact Us
          </a>
        </div>
        {/* Scroll Progress Bar */}
        <div className="h-0.5 bg-gray-100">
          <div
            className="h-full bg-[#6ba1a3] transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-8">
            <img
              src="/images/logos/pattern3black.png"
              alt="Pattern3 Logo"
              className="h-16 mx-auto mb-6"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Let's Talk About Your<br />
            <span className="text-[#6ba1a3]">AI Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to explore how AI can transform your business? Let's start a conversation about your goals, challenges, and opportunities.
          </p>
          
          <a
            href="mailto:william.n.patterson@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6ba1a3] text-white rounded-xl hover:bg-[#4f8385] transition-all duration-200 transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            william.n.patterson@gmail.com
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Email</h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message about your project or questions.
              </p>
              <a
                href="mailto:william.n.patterson@gmail.com"
                className="text-[#6ba1a3] hover:text-[#4f8385] font-medium"
              >
                william.n.patterson@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Resume</h3>
              <p className="text-gray-600 mb-4">
                Download my resume to learn more about my background and experience.
              </p>
              <a
                href="/images/profile/Will_Patterson_Resume_June2025.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6ba1a3] hover:text-[#4f8385] font-medium"
              >
                Download Resume
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-[#6ba1a3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[#6ba1a3]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Social</h3>
              <p className="text-gray-600 mb-4">
                Follow my work and insights on social media platforms.
              </p>
              <a
                href="https://www.tiktok.com/@w_patt3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6ba1a3] hover:text-[#4f8385] font-medium"
              >
                @w_patt3 on TikTok
              </a>
            </div>
          </div>
        </div>

        {/* What to Include */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What to Include in Your Message
          </h2>
          
          <div className="bg-gradient-to-r from-[#6ba1a3]/10 to-[#6ba1a3]/5 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">About Your Business</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• What industry you're in</li>
                  <li>• Size of your team</li>
                  <li>• Current challenges you're facing</li>
                  <li>• What you hope to achieve</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">About Your Project</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Timeline for implementation</li>
                  <li>• Budget considerations</li>
                  <li>• Any specific AI tools you're interested in</li>
                  <li>• Questions about our process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">How quickly do you respond?</h3>
              <p className="text-gray-600">I typically respond to emails within 24-48 hours during business days.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Do you offer free consultations?</h3>
              <p className="text-gray-600">Yes! I offer free initial consultations to understand your needs and see if we're a good fit.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">What types of projects do you work on?</h3>
              <p className="text-gray-600">I specialize in AI automation, custom tools, and systems integration for small to medium businesses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Do you work with businesses outside healthcare?</h3>
              <p className="text-gray-600">Absolutely! While I have experience in healthcare, I work with businesses across many industries.</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#6ba1a3] p-8 md:p-12 rounded-2xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start the conversation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reach out today and let's discuss how Pattern3 LLC can help transform your business with AI.
            </p>
            <a
              href="mailto:william.n.patterson@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#6ba1a3] rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 text-lg font-semibold shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8 mt-16">
          Pattern3 LLC | AI solutions that bridge technology and human connection.
        </div>
      </div>
    </div>
  );
};

export default StartPage;