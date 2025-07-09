import { Grid } from "@mui/material"
import SectionsResume from "./components/SectionsResume/SectionsResume";
import AddSections from "./components/AddSections/AddSections";


const Editor = () => {
  

    return (
        <Grid container size={5}>
            <AddSections/>
            <SectionsResume/>
        </Grid>
    )
}

export default Editor