import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, FileText, MessageCircle, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';

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

    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .stagger-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent animate-pulse"></div>
        <div className="absolute w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-pulse"
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
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors font-medium"
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
            className="btn-primary text-sm px-6 py-3"
          >
            Contact Us
          </a>
        </div>
        {/* Scroll Progress Bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-200"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="mb-8">
            <img
              src="/images/logos/pattern3black.png"
              alt="Pattern3 Logo"
              className="h-20 mx-auto mb-8 fade-in-up"
            />
          </div>

          <h1 className="fade-in-up text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-gray-900" style={{ animationDelay: '0.1s' }}>
            Let's Talk About Your<br />
            <span className="text-gradient">AI Journey</span>
          </h1>
          
          <p className="fade-in-up text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Ready to explore how AI can transform your business? Let's start a conversation about your goals, challenges, and opportunities.
          </p>
          
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToBooking}
              className="btn-primary inline-flex items-center gap-3 text-xl px-10 py-5 shadow-glow"
            >
              <ArrowRight className="w-6 h-6" />
              Book Free Consultation
            </button>
            
            <a
              href="mailto:william.n.patterson@gmail.com"
              className="btn-outline inline-flex items-center gap-3 text-xl px-10 py-5"
            >
              <Mail className="w-6 h-6" />
              Send Email
            </a>
          </div>
          
          <p className="fade-in-up text-sm text-gray-500 mt-6" style={{ animationDelay: '0.4s' }}>
            william.n.patterson@gmail.com
          </p>
        </div>

        {/* Contact Methods */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="fade-in-up text-3xl md:text-4xl font-black text-center mb-16 text-gray-900">
            How to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Mail,
                title: "Email",
                description: "Send us a detailed message about your project or questions.",
                link: "mailto:william.n.patterson@gmail.com",
                linkText: "william.n.patterson@gmail.com",
                delay: "0s"
              },
              {
                icon: FileText,
                title: "Resume",
                description: "Download my resume to learn more about my background and experience.",
                link: "/images/profile/Will_Patterson_Resume_June2025.docx",
                linkText: "Download Resume",
                delay: "0.1s"
              },
              {
                icon: MessageCircle,
                title: "Social",
                description: "Follow my work and insights on social media platforms.",
                link: "https://www.tiktok.com/@w_patt3",
                linkText: "@w_patt3 on TikTok",
                delay: "0.2s"
              }
            ].map((item, index) => (
              <div key={index} className={`stagger-fade-in card text-center shadow-glow`} style={{ animationDelay: item.delay }}>
                <div className="card-icon mx-auto">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-primary hover:text-accent font-semibold transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Section */}
        <section id="booking" className="max-w-4xl mx-auto mb-24">
          <BookingForm sourcePage="start" />
        </section>

        {/* What to Include */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="fade-in-up text-3xl md:text-4xl font-black text-center mb-16 text-gray-900">
            What to Include in Your Message
          </h2>
          
          <div className="card bg-gradient-to-br from-primary/5 to-accent/5 border-gradient">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="slide-in-left">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">About Your Business</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    What industry you're in
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    Size of your team
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    Current challenges you're facing
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    What you hope to achieve
                  </li>
                </ul>
              </div>
              
              <div className="slide-in-right">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">About Your Project</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    Timeline for implementation
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    Budget considerations
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    Any specific AI tools you're interested in
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    Questions about our process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="fade-in-up text-3xl md:text-4xl font-black text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond?",
                answer: "I typically respond to emails within 24-48 hours during business days.",
                delay: "0s"
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! I offer free initial consultations to understand your needs and see if we're a good fit.",
                delay: "0.1s"
              },
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in AI automation, custom tools, and systems integration for small to medium businesses.",
                delay: "0.2s"
              },
              {
                question: "Do you work with businesses outside healthcare?",
                answer: "Absolutely! While I have experience in healthcare, I work with businesses across many industries.",
                delay: "0.3s"
              }
            ].map((item, index) => (
              <div key={index} className={`stagger-fade-in card border-gradient`} style={{ animationDelay: item.delay }}>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Mobile Button */}
        <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
          <button
            onClick={scrollToBooking}
            className="w-full btn-primary py-4 text-lg shadow-2xl"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8 mt-20">
          Pattern3 LLC | AI solutions that bridge technology and human connection.
        </div>
      </div>
    </div>
  );
};

export default StartPage;