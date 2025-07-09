import { Grid, TextField, Button, InputAdornment } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../../../store/slices/sectionsSlice"
import type { FormProps, personalInformationType } from "./types"
import type { RootState } from "../../../../store/configureStore"

const PersonalInformationForm = ({id, closeForm}:FormProps) => {

  const dispatch = useDispatch()
  const personalInformationData = useSelector((state: RootState) => state.sections.find(section => section.sectionType === 'personalInformation')?.data[0]) as personalInformationType
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<personalInformationType>({
    defaultValues: {
      name: personalInformationData?.name ?? '',
      surname: personalInformationData?.surname ?? '',
      email: personalInformationData?.email ?? '',
      phoneNumber: personalInformationData?.phoneNumber ?? '',
    }})

  const onSubmit = (data:personalInformationType) =>{ 
    dispatch(addData({data: {...data, id}, sectionType: 'personalInformation'}))
    closeForm()
  }

  return (
    <Grid 
      container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={3}
      
      >
            <Grid container direction='row' gap='20px' justifyContent={'space-between'} width={'100%'}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ 
                    required: 'Введите имя', 
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символов"
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Имя"
                      type="text"
                      variant="outlined"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />

                <Controller
                  name="surname"
                  control={control}
                  rules={{ 
                    required: 'Введите фамилию', 
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символов"
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Фамилия"
                      type="text"
                      variant="outlined"
                      error={!!errors.surname}
                      helperText={errors.surname?.message}
                    />
                  )}
                />
            </Grid>

            <Controller
              name="email"
              control={control}
              rules={{  
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный email"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Номер телефона"
                  type="text"
                  variant="outlined"
                  fullWidth
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">+</InputAdornment>,
                    },
                  }}
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

export default PersonalInformationForm