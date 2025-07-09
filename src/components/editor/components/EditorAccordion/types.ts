import type { SectionType } from "../AddSections/types";
import type { sectionData} from "../../../../store/slices/types";

export interface IAccordionItemProps {
  sectionType: SectionType;
  title: string;
  data: sectionData[]
}