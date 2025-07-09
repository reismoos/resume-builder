import { useSelector } from "react-redux"
import type { RootState } from "../../../../store/configureStore";
import EditorAccordion from "../EditorAccordion/EditorAccordion";
import { Box } from "@mui/material";

const SectionsResume = () => {
    const sections = useSelector((state:RootState) => state.sections)
    console.log(sections)

    return (
        <Box width={'100%'}>
            {sections.map(section => <EditorAccordion key={section.sectionType} sectionType={section.sectionType} title={section.title} data={section.data} />)}
        </Box>
    )
}





export default SectionsResume