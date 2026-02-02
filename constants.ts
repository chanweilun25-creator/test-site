import { CategoryConfig, ContentCategory } from './types';

export const CATEGORIES: CategoryConfig[] = [
  {
    id: ContentCategory.COSMIC_TRUTH,
    label: 'Cosmic Truth',
    icon: 'Sparkles',
    color: 'from-purple-500 to-indigo-500',
    prompt: 'Generate a mind-blowing, scientifically accurate fact about the universe, space, or quantum physics. Keep it under 2 sentences. Make it sound profound.',
  },
  {
    id: ContentCategory.DIGITAL_FORTUNE,
    label: 'Digital Fortune',
    icon: 'Zap',
    color: 'from-cyan-500 to-blue-500',
    prompt: 'Write a fortune cookie message for a software developer or tech enthusiast in the year 3000. It should be cryptic but optimistic.',
  },
  {
    id: ContentCategory.STARTUP_PIVOT,
    label: 'Startup Pivot',
    icon: 'Rocket',
    color: 'from-emerald-500 to-teal-500',
    prompt: 'Invent a ridiculous, satirical silicon valley startup idea that combines two unrelated concepts (e.g., "Uber for Hedgehogs"). Give it a catchy name and a one-sentence pitch.',
  },
  {
    id: ContentCategory.VOID_HAIKU,
    label: 'Void Haiku',
    icon: 'Moon',
    color: 'from-fuchsia-500 to-pink-500',
    prompt: 'Write a Haiku (5-7-5 syllable structure) about the silence of deep space or the feeling of staring into a black hole.',
  },
];

export const INITIAL_GREETING = "Welcome to the Serendipity Engine. Select a frequency to tune into the universal data stream.";