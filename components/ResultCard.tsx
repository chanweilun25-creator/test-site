import React from 'react';
import { Copy, Check } from 'lucide-react';
import { GeneratedContent } from '../types';
import { CATEGORIES } from '../constants';

interface ResultCardProps {
  content: GeneratedContent | null;
  loading: boolean;
  onCopy: () => void;
  copied: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ content, loading, onCopy, copied }) => {
  if (loading) {
    return (
      <div className="w-full max-w-2xl min-h-[200px] p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl flex flex-col items-center justify-center animate-pulse">
        <div className="w-12 h-12 mb-4 rounded-full bg-slate-800/80 animate-bounce"></div>
        <div className="w-3/4 h-4 mb-2 bg-slate-800/80 rounded"></div>
        <div className="w-1/2 h-4 bg-slate-800/80 rounded"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="w-full max-w-2xl min-h-[200px] p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm flex items-center justify-center text-slate-500 italic">
        Select a channel to begin transmission...
      </div>
    );
  }

  const activeCategory = CATEGORIES.find(c => c.id === content.category);

  return (
    <div className="relative w-full max-w-2xl group perspective">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
      <div className="relative p-8 md:p-12 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-[1.8rem] shadow-2xl transition-transform duration-500 transform hover:scale-[1.01]">
        
        {activeCategory && (
          <div className={`inline-flex items-center px-3 py-1 mb-6 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${activeCategory.color} bg-clip-text text-transparent border border-slate-800 bg-slate-900/50`}>
             {activeCategory.label}
          </div>
        )}

        <h3 className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
          "{content.text}"
        </h3>

        <div className="mt-8 flex justify-end">
          <button 
            onClick={onCopy}
            className="flex items-center space-x-2 text-sm text-slate-500 hover:text-white transition-colors duration-200 focus:outline-none"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};