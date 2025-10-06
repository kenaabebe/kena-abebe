import { ArrowRight, Github,Linkedin, Send, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              Available for new freelance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Building seamless user experiences,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              one component at a time
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 animate-slide-up-delay">
            Front-End Developer specializing in React, TypeScript, and modern web technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in-delay-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
        

   {/* 2. Add Telegram Link (reusing Send icon for Telegram) */}
                    <a
                      href="https://t.me/therealpablos" // Replace with your actual Telegram link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label="Telegram"
                    >
                      <Send className="w-5 h-5" /> 
                    </a>

              <a
              href="https://www.linkedin.com/in/kena-abebe11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Linkedin className="w-6 h-6" />
            </a>
        


            <a
              href="mailto:developer@example.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll to About section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
