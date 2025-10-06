import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  features: string[];
  challenge: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing online stores with real-time analytics',
    longDescription: 'Built a full-featured e-commerce admin dashboard that handles inventory management, order processing, customer analytics, and sales reporting. The dashboard features real-time updates using WebSocket connections and a responsive design that works seamlessly across devices.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'WebSocket'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    features: [
      'Real-time sales analytics and reporting',
      'Inventory management with low-stock alerts',
      'Customer behavior tracking and insights',
      'Order processing and fulfillment workflow',
      'Responsive design for mobile and tablet',
    ],
    challenge: 'The main challenge was implementing real-time updates without impacting performance. Solved this by implementing efficient WebSocket connections with smart caching and optimistic UI updates.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop kanban boards',
    longDescription: 'Developed a modern task management application inspired by tools like Trello and Asana. Features include drag-and-drop functionality, team collaboration, real-time updates, and customizable workflows.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'DnD Kit'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    features: [
      'Drag-and-drop kanban board interface',
      'Real-time collaboration with team members',
      'Custom workflow automation',
      'File attachments and comments',
      'Advanced filtering and search',
    ],
    challenge: 'Implementing smooth drag-and-drop with real-time synchronization across multiple users required careful state management and conflict resolution strategies.',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with hourly forecasts and interactive maps',
    longDescription: 'Created a modern weather application that provides detailed forecasts, radar maps, and weather alerts. The app features a clean, intuitive interface with smooth animations and location-based services.',
    technologies: ['React', 'TypeScript', 'Weather API', 'Mapbox', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    features: [
      '7-day forecast with hourly breakdowns',
      'Interactive weather radar maps',
      'Location-based weather alerts',
      'Beautiful weather animations',
      'Favorite locations management',
    ],
    challenge: 'Optimizing API calls and implementing intelligent caching to minimize data usage while keeping information fresh and accurate.',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals to showcase their work',
    longDescription: 'Built a headless CMS specifically designed for photographers, designers, and artists to manage and display their portfolios. Features include custom layouts, SEO optimization, and fast image delivery.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Sharp'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    liveUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    features: [
      'Drag-and-drop gallery builder',
      'Automatic image optimization',
      'Custom portfolio templates',
      'SEO-friendly structure',
      'Client proofing and feedback system',
    ],
    challenge: 'Implementing efficient image optimization and delivery while maintaining quality. Used Sharp for server-side processing and implemented a smart caching strategy.',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A selection of projects that showcase my skills in building modern, user-friendly web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center z-10">
              <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-400 hover:text-white" />
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
              />

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">About the Project</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technical Challenge</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-semibold transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
