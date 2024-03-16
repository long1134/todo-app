import { Box, FormHelperText, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { Controller, FieldPath, FieldValues, PathValue } from "react-hook-form"
import { FormInputProps } from "@src/components"
import { Link } from "react-router-dom"

const FormInput = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	control,
	id,
	label,
	name,
	helperText,
	containerSx,
	isPassword,
	...other
}: FormInputProps<TFieldValues> & { isPassword?: boolean }) => {
	return (
		<Controller<TFieldValues, TName>
			control={control}
			defaultValue={"" as PathValue<TFieldValues, TName>}
			render={({ field, fieldState }) => (
				<Box sx={containerSx}>
					<Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: 500 }}>
						<InputLabel
							htmlFor={id ?? name}
							style={{ fontWeight: "normal", color: "black" }}
							error={fieldState.error != null}
						>
							{label}
						</InputLabel>
						{isPassword && (
							<Link to="/auth/login">
								<Typography sx={{ textDecoration: "underline", color: "#68ca9a" }}>
									Forgot Password ?
								</Typography>
							</Link>
						)}
					</Box>
					<OutlinedInput
						id={id ?? name}
						{...other}
						{...field}
						sx={{
							width: "100%",
							mt: 1,
							backgroundColor: "#f5f5f6",
							height: "60px",
							fontWeight: 500,
							pl: 1,
							"&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
								border: "none",
							},
							"&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
								border: "none",
							},
							"&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
								{
									borderColor: "#80bdff !important",
									border: 1,
									boxShadow: "0 0 5px rgba(128, 189, 255, 0.5)",
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

export default FormInput
