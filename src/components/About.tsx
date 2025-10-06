import { Code2, Palette, Rocket, Users } from 'lucide-react';
const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Next.js', level: 88 },
  { name: 'Node.js', level: 85 },
];
const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices and design patterns',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Building consistent, accessible component libraries and design systems',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and exceptional user experience',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with designers, backend developers, and product teams',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
               Hello I'm Kena Abebe a passionate front-end developer as a junior to crafting
                beautiful, performant web applications. My journey into development started with
                a curiosity about how websites work, which quickly evolved into a deep love for
                creating exceptional user experiences.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in modern JavaScript frameworks, with a particular focus on React
                and its ecosystem. I believe that great front-end development is about more than
                just making things look good—it's about creating intuitive, accessible, and
                performant experiences that users love.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new web technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
