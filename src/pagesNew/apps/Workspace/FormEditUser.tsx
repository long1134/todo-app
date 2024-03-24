import { Box, Button } from "@mui/material"
import useEditUser from "./useEdit"
import { TextFieldEditUser } from "./TextFieldEditUser"
type FormEditUserProps = {
	handleCancel: (value: React.SetStateAction<boolean>) => void
}

export const FormEditUser: React.FC<FormEditUserProps> = ({ handleCancel }) => {
	const { loading, save, control } = useEditUser()
	return (
		<Box>
			<form onSubmit={() => {}}>
				<TextFieldEditUser
					name="name"
					type="text"
					label="Name"
					control={control}
					isRequired
				/>
				<TextFieldEditUser
					name="shortName"
					type="text"
					label="Short Name"
					control={control}
					isRequired
				/>
				<TextFieldEditUser name="website" type="text" label="Website" control={control} />
				<TextFieldEditUser
					name="description"
					type="text"
					label="Description"
					control={control}
				/>

				<Box sx={{ display: "flex", gap: 1 }}>
					<Button
						sx={{
							mt: 3,
							padding: "6px 12px",
							background: "#0c66e4",
							"&:hover": {
								opacity: 0.8,
								backgroundColor: "#0c66e4",
							},
						}}
						onClick={() => handleCancel(false)}
						variant="contained"
						color="primary"
						type="submit"
						size={"large"}
					>
						Save
					</Button>
					<Button
						sx={{
							mt: 3,
							padding: "6px 12px",
							background: "#091E420F",
							"&:hover": {
								opacity: 0.8,
								backgroundColor: "#091E420F",
							},
							color: "black",
						}}
						onClick={() => handleCancel(false)}
						variant="contained"
						color="primary"
						type="submit"
						size={"large"}
					>
						Cancel
					</Button>
				</Box>
			</form>
		</Box>
	)
}
