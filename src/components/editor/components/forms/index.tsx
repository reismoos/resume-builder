import EducationForm from "./EducationForm"
import PersonalInformationForm from "./PersonalInformationForm"
import SkillsForm from "./SkillsForm"
import type { FormComponents } from "./types"

const Forms: FormComponents = {
    'personalInformation': (id, closeForm) => <PersonalInformationForm closeForm={closeForm} id={id} />,
    'education': (id, closeForm) => <EducationForm closeForm={closeForm} id={id}/>,
    'skills': (id, closeForm) => <SkillsForm closeForm={closeForm} id={id}/>,
}

export default Forms