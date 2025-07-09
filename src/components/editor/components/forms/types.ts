import type { SectionType } from "../AddSections/types";

export type FormComponents = {
  [key in SectionType]?: (id: string, closeForm: () => void ) => React.ReactNode;
};

export type FormProps = {
  id: string
  closeForm: () => void
}

export type personalInformationType = {
  name: string
  surname: string
  email?: string
  phoneNumber?: string
  id: string
}

export type educationType = {
    education?: string
    school?: string
    city?: string
    startMonth?: string
    startYear?: string
    endMonth?: string
    endYear?: string
    description?: string
    now?: boolean
    id: string
}

export type skillType = {
  skill: string
  level: number
  id: string
}