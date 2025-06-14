import { createContext, useContext, ReactNode } from 'react';
import { Project } from '../types/Project';

// Project data
const projectsData: Project[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation - Brand Builder',
    description: 'Built a fully automated workflow that takes a client\'s form submission and turns it into a full brand voice guide — styled, written, and delivered automatically.',
    longDescription: 'This is a fully automated brand system built using n8n, Docker, and the OpenAI API — all running locally, powered by curiosity and extensive research. The system takes client input through a Tally form, processes it via a self-hosted n8n instance through ngrok, and leverages GPT-4o using OpenAI\'s API. The custom-built prompt returns a comprehensive tone-of-voice breakdown, writing examples, and personality guide structured like a creative brief. The result is automatically formatted into a Google Doc and delivered via email. Running on a local PC with Docker and PowerShell, this solution eliminates expensive backend costs, with OpenAI API being the only significant expense at just cents per submission — far more cost-effective than traditional writing or strategy services.',
    coverImage: '/images/projects/AI Automation/cover.png',
    images: ['/images/projects/AI Automation/cover.png'],
    videoUrl: 'https://vimeo.com/1088605068?share=copy',
    videoEmbed: '<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1088605068?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Fully Automated Brand Builder – Powered by AI + No-Code"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tags: ['AI Automation', 'No-Code', 'Brand Strategy', 'OpenAI', 'Docker'],
    featured: true,
    client: 'Internal Project',
    year: 2024,
    services: ['Automation Development', 'Brand Strategy', 'System Architecture']
  },
  {
    id: 'ai-video-golf-canvas',
    title: 'Golf Canvas Project',
    description: 'A Spotify Canvas video built with Sora, designed to capture the surreal drama of impact — and destruction — on the green.',
    longDescription: 'This experimental content project explores the intersection of AI video generation and cinematic storytelling. Using Sora (OpenAI) for ultra-realistic video generation, the concept plays on cinematic suspense — imagining a golfer witnessing supernatural interference on the green. Built as a looped Canvas for Spotify, it\'s intended to feel like a teaser to something bigger, with sci-fi or horror adjacent vibes. The project required careful prompt engineering to achieve realistic textures and handheld camera feel, while timing the blast and reaction to sync with music. This showcases Sora\'s frame control and scene realism capabilities to avoid typical CGI weirdness, demonstrating advanced AI art-direction workflows.',
    coverImage: '/images/projects/AI Video/cover.png',
    images: ['/images/projects/AI Video/cover.png'],
    videoUrl: 'https://vimeo.com/1093384622?share=copy',
    videoEmbed: '<div style="padding:167.47% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1093384622?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Spotify Canvas (Professional-Grade AI Video)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tags: ['Sora', 'AI Video Generation', 'Spotify Canvas', 'Experimental Content', 'Prompt Engineering'],
    featured: true,
    client: 'Internal Project',
    year: 2024,
    services: ['AI Video Generation', 'Content Creation', 'Prompt Engineering']
  },
  {
    id: 'd32-text-rewriter',
    title: 'D32 Text Message Re-Writer',
    description: 'Built a custom Gemini assistant to help Dental32\'s front desk staff rewrite patient-facing messages in a warm, branded tone.',
    longDescription: 'Created an internal messaging assistant that transforms how Dental32\'s front desk staff communicates with patients. This custom Gemini-powered tool integrates seamlessly with Google Workspace and provides two polished, text-length responses per input—one detailed, one short and direct. By eliminating token costs and technical barriers, this solution ensures consistent, on-brand communication while empowering non-technical staff to communicate like professionals. The tool requires no AI prompting experience and maintains Dental32\'s warm, professional tone across all patient interactions, significantly improving message quality and saving valuable time for front desk operations.',
    coverImage: '/images/projects/ReWriter/cover.png',
    images: [
      '/images/projects/ReWriter/cover.png',
      '/images/projects/ReWriter/Screenshot 2025-06-07 155840.png',
      '/images/projects/ReWriter/Screenshot 2025-06-07 160145.png',
      '/images/projects/ReWriter/Screenshot 2025-06-07 160158.png'
    ],
    tags: ['Gemini AI', 'Google Workspace', 'Internal Tools', 'Healthcare', 'Communication'],
    featured: true,
    client: 'Dental32',
    year: 2024,
    services: ['AI Integration', 'Internal Tool Development', 'Communication Strategy']
  },
  {
    id: 'echo',
    title: 'Echo - AI Transcription',
    description: 'Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.',
    longDescription: 'Echo is an innovative internal solution that addresses the significant time healthcare professionals spend on documentation. Built from the ground up, this AI-powered tool captures provider-patient conversations, transcribes them using Whisper ASR, and structures the information into formatted clinical notes. The system features secure user authentication, customizable templates, and robust database management through Supabase, all while ensuring strict healthcare data privacy standards. This project demonstrates the practical application of AI in healthcare, combining domain expertise with technical implementation to create meaningful solutions.',
    coverImage: '/images/projects/Echo/cover.jpg',
    images: [
      '/images/projects/Echo/cover.jpg',
      '/images/projects/Echo/1.jpg',
      '/images/projects/Echo/2.jpg',
      '/images/projects/Echo/3.jpg'
    ],
    tags: ['AI Implementation', 'Healthcare Tech', 'React', 'Supabase'],
    featured: true,
    client: 'Internal Project',
    year: 2024,
    services: ['AI Integration', 'Database Design', 'Full-Stack Development']
  },
  {
    id: 'ai-implementation',
    title: 'AI Implementation',
    description: 'Converting executive talks and content into an interactive AI knowledge base using Claude and GitHub Copilot.',
    longDescription: 'Leveraging cutting-edge AI technology, we transformed our executive leadership\'s talks, speeches, and video content into an interactive knowledge base. Using Claude by Anthropic\'s knowledge base feature combined with GitHub Copilot, we created a system that allows team members to engage with and learn from leadership content in a more dynamic and accessible way.',
    coverImage: '/images/projects/AI Implementation/cover.jpg',
    images: [
      '/images/projects/AI Implementation/cover.jpg',
      '/images/projects/AI Implementation/detail-2.jpg'
    ],
    tags: ['AI', 'Knowledge Management', 'Content Strategy'],
    featured: true,
    client: 'Internal Project',
    year: 2024,
    services: ['AI Integration', 'Content Management', 'Technical Implementation']
  },
  {
    id: 'basketball',
    title: 'Dental32 Basketball Initiative',
    description: 'Complete rebranding project connecting Dental32\'s culture team with local basketball.',
    longDescription: 'A comprehensive rebranding initiative that united Dental32\'s culture team with local basketball, creating a unique community engagement opportunity. This project involved full logo development and brand strategy, effectively bridging corporate culture with community sports to create meaningful connections and strengthen our local presence.',
    coverImage: '/images/projects/Basketball/cover.jpg',
    images: [
      '/images/projects/Basketball/cover.jpg',
      '/images/projects/Basketball/1.jpg',
      '/images/projects/Basketball/2.jpg',
      '/images/projects/Basketball/3.jpg',
      '/images/projects/Basketball/4.jpg'
    ],
    tags: ['Branding', 'Sports', 'Community Engagement'],
    featured: true,
    client: 'Dental32',
    year: 2024,
    services: ['Brand Strategy', 'Logo Design', 'Community Relations']
  },
  {
    id: 'dna-campaign',
    title: 'Getting Back to Our DNA',
    description: 'Strategic internal campaign analyzing business performance to create team motivation.',
    longDescription: 'Through careful analysis of our company\'s past two years of business performance, we developed a powerful internal campaign centered around the concept of "getting back to our DNA" and "finding our DNA." The campaign\'s centerpiece features a stunning DNA strand visual created entirely through generative AI using Kling and Sora. This required extensive prompt engineering and editing expertise to achieve the perfect blend of scientific accuracy and artistic appeal. The result is a compelling narrative that unites our team around core values and strategic goals, demonstrating how cutting-edge AI technology can be leveraged to create impactful internal communications.',
    coverImage: '/images/projects/DNA/cover.jpg',
    images: ['/images/projects/DNA/cover.jpg'],
    videoUrl: 'https://vimeo.com/1075751446?share=copy',
    videoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1075751446?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Dental32 Presents: The DNA Project"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tags: ['Internal Communications', 'Strategy', 'Team Building', 'Generative AI'],
    featured: true,
    client: 'Dental32',
    year: 2024,
    services: ['Strategy Development', 'Internal Communications', 'AI Video Generation']
  },
  {
    id: 'new-patient',
    title: 'New Patient Experience',
    description: 'Comprehensive video production showcasing business highlights for new patients.',
    longDescription: 'Wrote, directed, and produced an engaging video presentation for new Dental32 patients. The video effectively communicates our business highlights and core values, creating a welcoming and informative first impression for patients beginning their journey with our practice.',
    coverImage: '/images/projects/New Patient/cover.jpg',
    images: ['/images/projects/New Patient/cover.jpg'],
    videoUrl: 'https://vimeo.com/1044757293?share=copy',
    videoEmbed: '<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044757293?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Your First Visit: The Dental32 Difference"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    tags: ['Video Production', 'Patient Experience', 'Healthcare'],
    featured: false,
    client: 'Dental32',
    year: 2024,
    services: ['Video Production', 'Content Creation', 'Patient Communications']
  },
  {
    id: 'perks-program',
    title: 'Local Business Perks Program',
    description: 'Innovative strategy connecting local businesses with affordable dental care.',
    longDescription: 'Developed and implemented a strategic program that creates mutually beneficial relationships between local small businesses and our dental practice. The initiative provides affordable dental care options while strengthening community business ties, resulting in a win-win situation for both the local business community and healthcare access.',
    coverImage: '/images/projects/Perks/cover.jpg',
    images: [
      '/images/projects/Perks/cover.jpg',
      '/images/projects/Perks/p1.jpg',
      '/images/projects/Perks/p3.jpg'
    ],
    tags: ['Business Strategy', 'Healthcare', 'Community'],
    featured: false,
    client: 'Dental32',
    year: 2024,
    services: ['Program Development', 'Business Strategy', 'Community Outreach']
  },
  {
    id: 'professional-photography',
    title: 'Professional Photography Portfolio',
    description: 'Collection of professional headshot photography showcasing technical expertise.',
    longDescription: 'A showcase of professional photography skills demonstrating versatility across product, portrait, and dental photography. This portfolio highlights the ability to capture compelling professional images while maintaining technical excellence and attention to detail across different photography disciplines.',
    coverImage: '/images/projects/Professional/cover.png',
    images: [
      '/images/projects/Professional/cover.png',
      '/images/projects/Professional/Facetune_08-04-2025-12-53-144.jpg',
      '/images/projects/Professional/Facetune_28-03-2025-15-39-533.jpg',
      '/images/projects/Professional/Facetune_28-03-2025-15-00-044.jpg'
    ],
    tags: ['Photography', 'Product Photography', 'Portrait Photography', 'Dental Photography'],
    featured: false,
    client: 'Various Clients',
    year: 2024,
    services: ['Professional Photography', 'Product Photography', 'Portrait Photography']
  },
  {
    id: 'stripe-toolkit',
    title: 'P3 Starter Kit Funnel',
    description: 'A free product offering built with Stripe + Supabase + Bolt.',
    longDescription: 'Developed a streamlined product delivery system that combines Stripe\'s payment processing with Supabase\'s database capabilities and Bolt\'s automation features. The toolkit includes branded prompt templates, an agent setup guide, and an automated delivery system. This project serves as both a lead generation tool and a proof of concept for our automated checkout and fulfillment capabilities.',
    coverImage: '/images/projects/Stripe/cover.png',
    images: ['/images/projects/Stripe/cover.png'],
    tags: ['Stripe Integration', 'Automation', 'Product Development'],
    featured: false,
    client: 'Internal Project',
    year: 2024,
    services: ['Payment Integration', 'Automation Development', 'Product Strategy']
  }
];

interface ProjectContextType {
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};