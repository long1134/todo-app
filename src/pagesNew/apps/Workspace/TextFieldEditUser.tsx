import { Box, FormHelperText, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { Controller, FieldPath, FieldValues, PathValue } from "react-hook-form"
import { FormInputProps } from "@src/components"
import { Link } from "react-router-dom"

export const TextFieldEditUser = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	id,
	label,
	name,
	helperText,
	containerSx,
	isRequired,
	...other
}: FormInputProps<TFieldValues> & { isRequired?: boolean }) => {
	return (
		<Controller<TFieldValues, TName>
			control={control}
			defaultValue={"" as PathValue<TFieldValues, TName>}
			render={({ field, fieldState }) => (
				<Box sx={containerSx}>
					<Box
						sx={{
							display: "flex",

							fontWeight: 500,
							mt: 2,
						}}
					>
						<InputLabel
							htmlFor={id ?? name}
							style={{ fontWeight: "bold", color: "black" }}
							error={fieldState.error != null}
						>
							{label}
						</InputLabel>
						{isRequired && <Typography sx={{ color: "red" }}>*</Typography>}
					</Box>
					<OutlinedInput
						id={id ?? name}
						{...other}
						{...field}
						sx={{
							width: 250,
							color: "gray",
							backgroundColor: "#f5f5f6",

							fontWeight: 500,
							pl: 1,
							"&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
								border: "2px solid gray",
							},
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
								background: "#e9e4e436",
							},
							"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
								{
									borderColor: "#0055CC !important",
								},
						}}
						error={fieldState.error != null}
						inputProps={{ style: { padding: "10px 12px" } }}
					/>
					{(helperText || fieldState.error?.message) && (
						<FormHelperText error={fieldState.error != null}>
							{fieldState.error?.message ?? helperText}
						</FormHelperText>
					)}
				</Box>
			)}
			name={name as TName}
		/>
	)
}
