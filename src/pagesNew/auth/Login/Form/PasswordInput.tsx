import { IconButton, InputAdornment } from "@mui/material"
import { FieldPath, FieldValues } from "react-hook-form"
import { LuEye, LuEyeOff } from "react-icons/lu"
import { useToggle } from "@src/hooks"

import FormInput from "./FormInput"
import { FormInputProps } from "@src/components"

const PasswordInput = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	isPassword,
	...other
}: FormInputProps<TFieldValues, TName> & { isPassword?: boolean }) => {
	const { isOpen, toggleOpen } = useToggle()

	return (
		<FormInput
			isPassword
			{...other}
			endAdornment={
				<InputAdornment position="end">
					<IconButton onClick={toggleOpen} edge="end">
						{isOpen ? <LuEyeOff /> : <LuEye />}
					</IconButton>
				</InputAdornment>
			}
			type={isOpen ? "text" : "password"}
		/>
	)
}

export default PasswordInput
