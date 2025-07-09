import { Grid, TextField, Button } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../../../store/slices/sectionsSlice"
import type { FormProps, skillType } from "./types"
import type { RootState } from "../../../../store/configureStore"
import { skillsLevels } from "./constants"
import SelectComponent from "./components/SelectComponent"

const SkillsForm = ({id, closeForm}:FormProps) => {

  const dispatch = useDispatch()
  const skills = useSelector((state: RootState) => state.sections.find(section => section.sectionType === 'skills')?.data.find(data => data.id === id)) as skillType
  const {
    control,
    handleSubmit,
  } = useForm<skillType>({
    defaultValues: {
      skill: skills?.skill ?? '',
      level: skills?.level ?? '',
    }})

  const onSubmit = (data: skillType) =>{ 
    dispatch(addData({data: {...data, id}, sectionType: 'skills'}))
    closeForm()
  }
    return(
        <Grid 
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={3}
        >
            <Grid container direction='row' gap='20px' justifyContent={'space-between'} width={'100%'}>
                <Controller
                    name="skill"
                    control={control}
                    render={({ field }) => (
                        <TextField
                        {...field}
                        label="Навык"
                        type="text"
                        variant="outlined"
                        />
                    )}
                    />

                <Grid width={'45%'}>
                    <SelectComponent control={control} label="Уровень" name="level" options={skillsLevels}/>
                </Grid>
                
            </Grid>            

            <Button 
            type="submit" 
            variant="contained" 
            size="large"
            sx={{
                mt: 2,
                bgcolor: 'primary.main',
                '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: 2
                },
                transition: 'all 0.3s ease'
            }}
            >
            Сохранить
            </Button>

        </Grid>
    )
}

export default SkillsForm