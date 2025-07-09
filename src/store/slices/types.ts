import type { SectionType } from "../../components/editor/components/AddSections/types"
import type { educationType, personalInformationType, skillType } from "../../components/editor/components/forms/types"

export type sectionData = personalInformationType | educationType | skillType

export interface ISectionsStore {
    sectionType: SectionType
    title: string
    data: sectionData[]
}

export type initialState = ISectionsStore[]