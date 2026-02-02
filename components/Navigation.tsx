import React from 'react';
import { Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-sm border-b border-white/5 bg-slate-950/50">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
          Serendipity<span className="text-indigo-400">Engine</span>
        </span>
      </div>
      <div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};