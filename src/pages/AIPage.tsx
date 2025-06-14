import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, ArrowRight } from 'lucide-react';
import { useProjectContext } from '../hooks/useProjectContext';

const AIPage = () => {
  const { projects } = useProjectContext();
  const aiProjects = [
    projects.find(p => p.id === 'ai-automation'),
    projects.find(p => p.id === 'd32-text-rewriter'),
    projects.find(p => p.id === 'stripe-toolkit'),
    projects.find(p => p.id === 'echo')
  ].filter(Boolean);

  const skills = [
    'Claude',
    'Bolt',
    'Supabase',
    'Stripe',
    'GPT-4',
    'Gemini',
    'Make',
    'Google Cloud',
    'LangChain',
    'JavaScript',
    'APIs',
    'No-Code',
    'AI Agents'
  ];

  const certifications = [
    {
      title: 'Google Cloud ML Engineer',
      status: 'In Progress',
      className: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: 'LangChain Bootcamp',
      status: 'In Progress',
      className: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'DeepLearning.AI Prompt Engineering',
      status: 'Completed',
      className: 'bg-green-100 text-green-800'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI + Automation Work by Will Patterson
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hands-on builds, zero-code stacks, and my current learning path
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/images/profile/Will_Patterson_Resume_June2025.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                <FileText size={20} /> View Resume
              </a>
              <a
                href="mailto:william.n.patterson@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                <Mail size={20} /> Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project?.coverImage}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project?.title}</h3>
                  <p className="text-gray-600 mb-4">{project?.description}</p>
                  <Link
                    to={`/project/${project?.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark"
                  >
                    View Project <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Currently Learning</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full ${cert.className} flex items-center gap-2`}
              >
                <span className="font-medium">{cert.title}</span>
                <span className="text-sm">({cert.status})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPage;