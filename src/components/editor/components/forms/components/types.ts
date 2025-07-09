import type { Control, FieldValues, Path } from "react-hook-form"

export interface ISelectComponentProps<T extends FieldValues> {
    name: Path<T>
    label: string
    options: string[] | number[]
    control: Control<T>
    disabled?: boolean
}