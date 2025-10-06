import { Briefcase, Download } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    role: 'Junior Front-End Developer',
    period: '2024 - Present',
    achievements: [
      'Led the development of a new design system used across 2 products',
      'Improved application performance by 20% through code optimization',
      'Mentored 2 junior developers and conducted code reviews',
      
    ],
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Front-End Developer',
    period: '2023 - 2024',
    achievements: [
      
      'Built responsive and visually engaging web interfaces using React, Tailwind CSS, and JavaScript',
      'Collaborated with UX team to improve user engagement by 10%',
      'Developed reusable component library reducing development time',
    ],
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Front-End Developer',
    period: '2022 - 2023',
    achievements: [
      'Developed and maintained client-facing web applications',
      'Worked closely with designers to implement pixel-perfect designs',
      'Contributed to the company blog with technical articles',
      'Love crafting clean, modern interfaces that balance beauty and functionality',
    ],
  },
];

export default function Experience() {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-slate-800 last:border-l-0 last:pb-0 group hover:border-blue-500/50 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
