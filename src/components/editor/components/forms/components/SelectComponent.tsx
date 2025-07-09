import {  TextField, MenuItem} from "@mui/material"
import { Controller } from "react-hook-form"
import type { ISelectComponentProps } from "./types"
import type { FieldValues } from "react-hook-form"

const SelectComponent = <T extends FieldValues>({control, name, label, options, disabled}: ISelectComponentProps<T>) => {
    return (
        <Controller
                name={name}
                control={control}
                render={({ field }) => (
                        <TextField
                        {...field}
                        select
                        fullWidth
                        variant="outlined"
                        label={label}
                        disabled={disabled}
                        >
                            {options.map((option: string | number, i: number) => {
                                return <MenuItem key={option} value={name === 'level' ? i + 1 : option}>{option}</MenuItem>
                            })}
                        </TextField>
                )}
                />
    )
}

export default SelectComponent