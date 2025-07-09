import type { sectionData } from "../../../../store/slices/types";
import type { SectionType } from "../AddSections/types";
import { skillsLevels } from "../forms/constants";
import type { educationType, skillType } from "../forms/types";

export const getItemText = (item: sectionData, sectionType: SectionType) => {
    switch (sectionType) {
      
      case 'education':
        { const educationItem = item as educationType;
        return {
          primary: educationItem.education,
          secondary: `${educationItem.school}${educationItem.city ? `, ${educationItem.city}` : ''}`
        }; }
      
      case 'skills':
        { const skillItem = item as skillType;
        return {
          primary: skillItem.skill,
          secondary: skillsLevels[skillItem.level - 1]
        }; }
      
      default:
        return { primary: '', secondary: '' };
    }
  };