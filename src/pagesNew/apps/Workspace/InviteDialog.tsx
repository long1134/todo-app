import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Box, TextField, Typography } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import { Link } from "react-router-dom"
import { AutocompleteInviteUser } from "./AutocompleteInviteUser"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { useEffect, useState } from "react"
import { TUser, configureFakeBackend } from "@src/common/fake-backend"
import axios from "axios"
type InviteDialogProps = {
	open: boolean
	handleClose: (value: React.SetStateAction<boolean>) => void
}
async function fetchUserData() {
	try {
		const response = await axios.get("/allUsers")
		return response.data
	} catch (error) {
		console.error("Error fetching user data:", error)
		throw error
	}
}
export const InviteDialog: React.FC<InviteDialogProps> = ({ open, handleClose }) => {
	const [isCopyLink, setIsCopyLink] = useState(true)
	const [showStatus, setShowStatus] = useState(false)
	const [loading, setLoading] = useState(true)
	const [usersList, setUsersList] = useState<TUser[]>([])
	useEffect(() => {
		configureFakeBackend()
		fetchUserData()
			.then(data => {
				setUsersList(data)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
			})
	}, [])

	const handleClick = () => {
		setShowStatus(true)
		setTimeout(() => {
			setShowStatus(false)
		}, 2000) // 2 seconds delay
	}
	return (
		<React.Fragment>
			<Dialog
				sx={{
					maxHeight: "100%",
					"& .MuiPaper-root": {
						overflowY: "unset",
					},
				}}
				open={open}
				onClose={() => handleClose(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle
					id="alert-dialog-title"
					sx={{ display: "flex", gap: 1, alignItems: "center" }}
				>
					<Typography variant="inherit" sx={{ color: "black" }}>
						Invite to Workspace
					</Typography>
					{showStatus && (
						<Box
							sx={{
								display: "flex",
								gap: 1,
								alignItems: "center",
								background: "#8effcfbd",
								padding: "5px 10px",
								borderRadius: "50px",
							}}
						>
							<CheckCircleOutlineIcon sx={{ color: "#009f5bbd" }} />
							<Typography sx={{ color: "#009f5be8" }}>
								Link copied to clipboard
							</Typography>
						</Box>
					)}
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						sx={{
							background: "#E9F2FF",
							p: 2,
							display: "flex",
							gap: 2,
						}}
						id="alert-dialog-description"
					>
						<InfoIcon sx={{ color: "#1d7afc" }} />
						<Box>
							<Typography>
								Let Google help apps determine location. This means sending
								anonymous location data to Google, even when no apps are running.
							</Typography>
							<Link to="">
								<Typography
									sx={{
										fontWeight: "bold",
										color: "#1d7afc",
										mt: 1,
										"&:hover": {
											textDecoration: "underline",
											backgroundColor: "none",
										},
									}}
								>
									Learn more
								</Typography>
							</Link>
						</Box>
					</DialogContentText>
					<AutocompleteInviteUser
						usersList={usersList}
						loading={loading}
						setLoading={setLoading}
					/>
				</DialogContent>
				<DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box sx={{ p: 2, pt: 0 }}>
						<Typography>Invite someone to this Workspace with a link</Typography>
						{isCopyLink && (
							<Button
								sx={{
									mt: -1,
									pl: 0,
									"&:hover": {
										textDecoration: "underline",
										backgroundColor: "none",
									},
									color: "#1d7afc",
								}}
								onClick={() => setIsCopyLink(false)}
							>
								<Typography
									sx={{ fontWeight: "bold", fontSize: "11px !important" }}
								>
									Disable Link
								</Typography>
							</Button>
						)}
					</Box>
					<Button
						sx={{
							mr: 2,
							padding: "5px 10px",
							background: "#091E420F",
							"&:hover": {
								opacity: 0.8,
								backgroundColor: "#091E420F",
							},
							color: "black",
						}}
						onClick={() => {
							setIsCopyLink(true)
							handleClick()
						}}
						autoFocus
					>
						<AttachFileIcon sx={{ rotate: "-135deg", mr: 1 }} />
						<Typography>Copy Link</Typography>
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}
