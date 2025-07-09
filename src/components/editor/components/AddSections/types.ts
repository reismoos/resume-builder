export type SectionType = 
  | 'personalInformation' 
  | 'education' 
  | 'skills';

export interface IMenuItem {
  sectionType: SectionType;
  title: string;
}