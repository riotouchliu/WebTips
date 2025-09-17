export interface CardType {
  text: string;
  type: 'new' | 'device' | 'app';
  iconContent?: string;
  url?: string;
}
// Define the structure for the section data
export interface Section {
  title: string;
  cards: CardType[];
}

export interface SectionData {
  new: Section;
  device: Section;
  app: Section;
}
