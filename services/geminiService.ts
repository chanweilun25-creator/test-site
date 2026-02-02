import { ContentCategory, GeneratedContent } from '../types';

const STATIC_DATA: Record<ContentCategory, string[]> = {
  [ContentCategory.COSMIC_TRUTH]: [
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars are so dense that a teaspoon of them would weigh 6 billion tons.",
    "The footprints on the Moon will be there for 100 million years because there is no wind to erode them.",
    "There are more stars in the universe than grains of sand on all the beaches on Earth.",
    "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together.",
    "The sun accounts for 99.86% of the mass in our solar system.",
    "We are all made of stardust; the nitrogen in our DNA, the calcium in our teeth, the iron in our blood were made in the interiors of collapsing stars.",
    "Space is completely silent. There is no atmosphere, which means sound has no medium or way to travel to be heard.",
    "A full NASA space suit costs $12,000,000.",
    "The largest known asteroid is 965 km (600 mi) wide. It was discovered by Italian astronomer Giuseppe Piazzi in 1801."
  ],
  [ContentCategory.DIGITAL_FORTUNE]: [
    "You will soon encounter a merge conflict that resolves itself automatically.",
    "404: Fortune not found. However, your future looks bright.",
    "A deploy on Friday will bring unexpected joy, contrary to popular belief.",
    "Your code will compile on the first try tomorrow.",
    "Refactoring is in your future. Embrace the clean slate.",
    "Beware of the infinite loop in your daily routine.",
    "The bug you are looking for is not in the code, but in the requirements.",
    "You will discover a library that does exactly what you spent the last 3 days building.",
    "Clear your cache, and your mind will follow.",
    "System Update: Your luck has been upgraded to version 2.0."
  ],
  [ContentCategory.STARTUP_PIVOT]: [
    "Uber for Hedgehogs: On-demand prickle transport.",
    "Airbnb for Tents in your Living Room: The ultimate staycation experience.",
    "LinkedIn for Cats: Professional networking for felines seeking mousers.",
    "Tinder for Trees: helping lonely oaks find their perfect birch.",
    "Spotify for Silence: High fidelity streaming of absolutely nothing.",
    "Blockchain-based Pet Rocks: They don't do anything, but they are decentralized.",
    "DoorDash for Leftovers: We pick up food from your fridge and bring it to your couch.",
    "Zoom for Mimes: The quietest video conferencing tool on the market.",
    "Netflix for Dreams: Stream your subconscious while you sleep.",
    "Instagram for Radio: Visualizing audio waves in sepia tone."
  ],
  [ContentCategory.VOID_HAIKU]: [
    "Silent stars observe\nThe spinning blue marble turns\nTime eats everything",
    "Black hole eats the light\nNothing escapes the hunger\nDarkness is eternal",
    "Cold vast empty space\nA single photon travels\nLonely little spark",
    "Nebula clouds bloom\nColors in the deep darkness\nCreation happens",
    "Floating in the void\nGravity has lost its hold\nWeightless dreams ascend",
    "Signal lost in space\nStatic whispers in the ear\nNo one hears the call",
    "Event horizon\nThe point of no return is\nCloser than you think",
    "Galaxies collide\nA dance of cosmic giants\nSlow motion chaos"
  ]
};

export const generateRandomContent = async (category: ContentCategory): Promise<GeneratedContent> => {
  // Simulate a brief "network" delay for the UI feel
  await new Promise(resolve => setTimeout(resolve, 400));

  const options = STATIC_DATA[category] || ["The void is silent."];
  const text = options[Math.floor(Math.random() * options.length)];

  return {
    text: text,
    category: category,
  };
};