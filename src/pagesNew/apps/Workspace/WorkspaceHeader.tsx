import { Box, Button, IconButton, Typography } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import LockIcon from "@mui/icons-material/Lock"
import ExploreIcon from "@mui/icons-material/Explore"
import { Link } from "react-router-dom"
import { useState } from "react"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { FormEditUser } from "./FormEditUser"
import { InviteDialog } from "./InviteDialog"
export const WorkspaceHeader = () => {
	const [isEdit, setIsEdit] = useState(false)
	const [isOpenInvite, setIsOpenInvite] = useState(false)
	return (
		<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
			{!isEdit ? (
				<Box>
					<Box sx={{ display: "flex", gap: 1 }}>
						<Box
							sx={{
								background: "linear-gradient(#1F845A,#4BCE97)",
								height: "60px",
								width: "60px",
								borderRadius: 1,
								position: "relative",
							}}
						>
							<Typography
								sx={{
									fontSize: "40px !important",
									position: "absolute",
									fontWeight: "bold",
									color: "white",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
								}}
							>
								T
							</Typography>
						</Box>

						<Box>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography sx={{ fontSize: "20px" }} variant="h2">
									Trello Workspace
								</Typography>
								<IconButton onClick={() => setIsEdit(true)}>
									<EditIcon fontSize="small" />
								</IconButton>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1,
									color: "gray",
								}}
							>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<LockIcon fontSize="small" />
									<Typography sx={{ fontSize: "12px", pt: "3px" }} variant="h2">
										Private
									</Typography>
								</Box>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<ExploreIcon fontSize="small" />
									<Link
										to={
											"https://mui.com/material-ui/material-icons/?query=compass"
										}
									>
										<Typography
											sx={{
												fontSize: "12px",
												pt: "3px",
												color: "gray",
												"&:hover": { color: "#0055CC" },
											}}
											variant="h6"
										>
											https://www.youtube.com
										</Typography>
									</Link>
								</Box>
							</Box>
						</Box>
					</Box>
					<Typography sx={{ color: "gray", fontSize: "10px !important" }}>
						Lien Minh Huyen thoai
					</Typography>
				</Box>
			) : (
				<FormEditUser handleCancel={setIsEdit} />
			)}
			<Button
				sx={{
					display: "flex",
					alignItems: "center",
					background: "#0C66E4",
					" &.MuiButton-root:hover": {
						backgroundColor: "#074eb3",
					},
					" &.MuiButtonBase-root": {
						padding: "2px 10px ",
					},
					gap: 1,
					height: "35px",
				}}
				onClick={() => setIsOpenInvite(true)}
			>
				<PersonAddIcon sx={{ color: "white" }} />
				<Typography variant="h4" sx={{ color: "white", fontSize: "12px" }}>
					Invite Workspace members
				</Typography>
			</Button>
			<InviteDialog open={isOpenInvite} handleClose={setIsOpenInvite} />
		</Box>
	)
}
