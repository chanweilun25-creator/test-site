import React, { useState, useCallback } from 'react';
import { Sparkles, Zap, Rocket, Moon, Dice5 } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ResultCard } from './components/ResultCard';
import { Button } from './components/Button';
import { generateRandomContent } from './services/geminiService';
import { CATEGORIES, INITIAL_GREETING } from './constants';
import { ContentCategory, GeneratedContent } from './types';

// Map icon strings to components
const IconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(async (category: ContentCategory) => {
    setLoading(true);
    setCopied(false);
    
    // Artificial minimum delay for better UX (so the loader doesn't flicker too fast)
    const minDelay = new Promise(resolve => setTimeout(resolve, 600));
    
    const [result] = await Promise.all([
      generateRandomContent(category),
      minDelay
    ]);

    setContent(result);
    setLoading(false);
  }, []);

  const handleRandom = useCallback(() => {
    const randomCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    handleGenerate(randomCategory.id);
  }, [handleGenerate]);

  const handleCopy = useCallback(() => {
    if (content?.text) {
      navigator.clipboard.writeText(content.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-white selection:bg-indigo-500/30">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen"></div>

        {/* Hero Text */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Tune the Static.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            {INITIAL_GREETING}
          </p>
        </div>

        {/* Content Display */}
        <div className="w-full flex justify-center mb-16">
          <ResultCard 
            content={content} 
            loading={loading} 
            onCopy={handleCopy}
            copied={copied}
          />
        </div>

        {/* Controls */}
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant="glass"
                onClick={() => handleGenerate(cat.id)}
                disabled={loading}
                className={`h-24 flex flex-col items-center justify-center space-y-2 hover:bg-gradient-to-br ${cat.color} group transition-all duration-300 border-opacity-20`}
              >
                <div className="text-indigo-300 group-hover:text-white transition-colors">
                  {IconMap[cat.icon]}
                </div>
                <span className="text-sm font-medium tracking-wide">{cat.label}</span>
              </Button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
             <Button 
                variant="primary" 
                onClick={handleRandom} 
                disabled={loading}
                className="w-full md:w-auto min-w-[200px] shadow-indigo-500/20"
                icon={<Dice5 className="w-5 h-5" />}
              >
                Surprise Me
              </Button>
          </div>
        </div>

      </main>

      <footer className="absolute bottom-6 w-full text-center text-xs text-slate-600 font-mono">
        <p>STATIC MODE • READY FOR GITHUB PAGES</p>
      </footer>
    </div>
  );
};

export default App;