export enum ContentCategory {
  COSMIC_TRUTH = 'COSMIC_TRUTH',
  DIGITAL_FORTUNE = 'DIGITAL_FORTUNE',
  STARTUP_PIVOT = 'STARTUP_PIVOT',
  VOID_HAIKU = 'VOID_HAIKU',
}

export interface GeneratedContent {
  text: string;
  category: ContentCategory;
}

export interface CategoryConfig {
  id: ContentCategory;
  label: string;
  icon: string; // Using string names for Lucide icons mapping
  color: string;
  prompt: string;
}