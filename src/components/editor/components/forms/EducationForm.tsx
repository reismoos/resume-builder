import { Grid, TextField, Button, FormControlLabel, Switch } from "@mui/material"
import { useForm, Controller, useWatch } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../../../store/slices/sectionsSlice"
import type { educationType, FormProps } from "./types"
import type { RootState } from "../../../../store/configureStore"
import { generateYears, months } from "./constants"
import SelectComponent from "./components/SelectComponent"

const EducationForm = ({id, closeForm}:FormProps) => {
    console.log(id, 'id education')

  const dispatch = useDispatch()
  const education = useSelector((state: RootState) => state.sections.find(section => section.sectionType === 'education')?.data.find(data => data.id === id)) as educationType
  const {
    control,
    handleSubmit,
  } = useForm<educationType>({
    defaultValues: {
      education: education?.education ?? '',
      school: education?.school ?? '',
      city: education?.city ?? '',
      startMonth: education?.startMonth ?? '',
      endMonth: education?.endMonth ?? '',
      startYear: education?.startYear ?? '',
      endYear: education?.endYear ?? '',
      description: education?.description ?? '',
      now: education?.now ?? false
    }})

  const now = useWatch({control, name: 'now'})

  const onSubmit = (data: educationType) =>{ 
    const newData = {...data, id}
    console.log(data, newData, 'education data from form')
    if (data.now) {
        newData.endMonth = ''
        newData.endYear = ''
    }
    dispatch(addData({data: newData, sectionType: 'education'}))
    closeForm()
  }
    return(
        <Grid 
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        gap={3}
        >
            <Controller
                name="education"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    label="Образование"
                    type="text"
                    variant="outlined"
                    fullWidth
                    />
                )}
                />
            <Grid container direction='row' gap='20px' justifyContent={'space-between'} width={'100%'}>

                <Controller
                name="school"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    label="Учреждение"
                    type="text"
                    variant="outlined"
                    />
                )}
                />

                <Controller
                name="city"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    label="Город"
                    type="text"
                    variant="outlined"
                    />
                )}
                />

            </Grid>

            <Grid container direction='column' gap='5px' width={'100%'}>
                <Grid container direction='row' gap='5px' width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <span>начало</span>
                    <Grid container direction='row' alignItems={'center'} width={'50%'} justifyContent={'space-around'}>
                        <span>конец</span>
                        <Controller
                            name="now"
                            control={control}
                            render={({ field }) => (
                                <FormControlLabel {...field} control={<Switch />} label="Учусь" />
                            )}
                            />
                    </Grid>
                </Grid>
                <Grid container direction='row' gap='20px' justifyContent={'space-between'} width={'100%'}>
                    <Grid container direction='row' gap='10px' justifyContent={'space-between'} width={'45%'}>
                        <Grid width={'45%'} >
                            <SelectComponent control={control} label="Месяц" name="startMonth" options={months}/>
                        </Grid>

                        <Grid width={'45%'} >
                            <SelectComponent control={control} label="Год" name="startYear" options={generateYears()}/>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' gap='10px' justifyContent={'space-between'} width={'45%'}>
                        <Grid width={'45%'} >
                            <SelectComponent control={control} label="Месяц" name="endMonth" options={months} disabled={now}/>
                        </Grid>

                        <Grid width={'45%'} >
                            <SelectComponent control={control} label="Год" name="endYear" options={generateYears()} disabled={now}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            

            

            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    label="Описание"
                    type="text"
                    multiline
                    rows={2}
                    fullWidth
                    variant="outlined"
                    />
                )}
                />

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

export default EducationForm