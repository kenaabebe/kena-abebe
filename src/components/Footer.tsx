import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold text-white">Kena Abebe</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>React,TypeScript & Tailwind CSS</span>
          </div>

          <p className="text-slate-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
