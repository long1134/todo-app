import {
	Box,
	Button,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Tooltip,
	Typography,
	imageListClasses,
} from "@mui/material"
import imageCreateBoard from "@src/assets/images/imageCreateBoard.svg"
import blueColor from "@src/assets/colors/blueColor.svg"
import orangeColor from "@src/assets/colors/orangeColor.svg"
import purpleColor from "@src/assets/colors/purpleColor.svg"
import skyColor from "@src/assets/colors/skyColor.svg"
import pinkColor from "@src/assets/colors/pinkColor.svg"
import { useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import LockIcon from "@mui/icons-material/Lock"
import PublicIcon from "@mui/icons-material/Public"
import GroupIcon from "@mui/icons-material/Group"
import { BoardType } from "./WorkspaceBody"
export const imagesList = [
	{
		imageUrl:
			"https://images.unsplash.com/photo-1709983967470-f6c72b61cc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1710678832358-c1f3e85939c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1704236041747-615d800a8b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1710667069082-0fc42df4bf46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1710475512346-82585f0e9a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
	{
		imageUrl:
			"https://images.unsplash.com/photo-1707147231430-7870dda96138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDZ8MzE3MDk5fHx8fHwyfHwxNzExMjQzMjg3fA&ixlib=rb-4.0.3&q=80&w=400",
	},
]

export const colorsList = [
	{
		backgroundColor: " rgb(34, 140, 213)",
		backgroundImage: skyColor,
		title: "❄️",
	},
	{
		backgroundColor: "rgb(11, 80, 175)",
		backgroundImage: blueColor,
		title: "🌊",
	},
	{
		backgroundColor: " rgb(103, 66, 132)",
		backgroundImage: purpleColor,
		title: "🔮",
	},
	{
		backgroundColor: " rgb(168, 105, 193)",
		backgroundImage: pinkColor,
		title: "🌈",
	},
	{
		backgroundColor: " rgb(239, 118, 58)",
		backgroundImage: orangeColor,
		title: "🍑",
	},
]
export const visibilityList = [
	{
		icon: <LockIcon />,
		title: "Private",
		text: "Only Board members can see and edit this board",
	},
	{
		icon: <GroupIcon />,
		title: "Workspace",
		text: "Only Board members can see and edit this board",
	},
	{
		icon: <PublicIcon />,
		title: "Public",
		text: "Only Board members can see and edit this board",
	},
]
type ActiveBacgroundProps = {
	isNotChecked?: boolean
}
export const ActiveBacground: React.FC<ActiveBacgroundProps> = ({ isNotChecked }) => (
	<Box
		sx={{
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "#00000029",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		{!isNotChecked && <CheckIcon style={{ color: "white", fontSize: 24 }} />}
	</Box>
)
type BoardCreateTooltipProps = {
	setBoardList: React.Dispatch<React.SetStateAction<BoardType[]>>
	boardList: BoardType[]
	handleTooltipClose: React.Dispatch<React.SetStateAction<boolean>>
}
export const BoardCreateTooltip: React.FC<BoardCreateTooltipProps> = ({
	setBoardList,
	boardList,
	handleTooltipClose,
}) => {
	const [showOverlay, setShowOverlay] = useState(0)

	const handleClick = (index: number) => {
		setShowOverlay(index)
	}

	const [inputValue, setInputValue] = useState("")
	const [hasInput, setHasInput] = useState(false)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(event.target.value)
		setHasInput(event.target.value !== "")
	}
	const [selectedVisibility, setSelectedVisibility] = useState("Workspace")
	const handleChangeVisibility = (e: SelectChangeEvent<string>) => {
		setSelectedVisibility(e.target.value)
	}

	const renderValue = () => {
		const selectedItem = visibilityList.find(item => item.title === selectedVisibility)
		return selectedItem ? selectedItem.title : ""
	}
	return (
		<Box
			sx={{
				p: 1,
			}}
		>
			<Typography sx={{ textAlign: "center" }}>Create board</Typography>
			<Box sx={{ p: 5, pt: 2, pb: 2 }}>
				<Box
					sx={{
						backgroundImage: `url(${
							showOverlay > 3
								? colorsList[showOverlay - 4].backgroundImage
								: imagesList[showOverlay].imageUrl
						})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						p: 1,
						/* additional styles */
					}}
				>
					<img src={imageCreateBoard} alt="imageCreateBoard" />
				</Box>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: "bold" }}>Background</Typography>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
					{imagesList.map((item, index) => {
						if (index < 4)
							return (
								<Tooltip
									key={item.imageUrl}
									placement="bottom-end"
									componentsProps={{
										tooltip: {
											sx: {
												color: "black",
												backgroundColor: "white",
											},
										},
									}}
									title="Custom image"
								>
									<Button
										onClick={() => handleClick(index)}
										sx={{
											p: 0,
											position: "relative",
											overflow: "hidden",
											backgroundColor: "transparent",
											border: "none",
											":hover": {
												"::before": {
													content: '""',
													position: "absolute",
													top: 0,
													left: 0,
													right: 0,
													bottom: 0,
													backgroundColor: "#091E4224",
												},
												backgroundColor: "transparent",
											},
										}}
									>
										<img
											style={{
												height: "40px",
												width: "64px",
												objectFit: "cover",
												borderRadius: 2,
											}}
											src={item.imageUrl}
											alt="imagesColor"
										/>
										{showOverlay === index && <ActiveBacground />}
									</Button>
								</Tooltip>
							)
					})}
				</Box>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
					{colorsList.map((item, index) => {
						return (
							<Tooltip
								key={item.title}
								placement="bottom-end"
								componentsProps={{
									tooltip: {
										sx: {
											backgroundColor: "white",
										},
									},
								}}
								title={item.title}
							>
								<Button
									onClick={() => handleClick(index + 4)}
									sx={{
										p: 0,
										width: "40px",
										minWidth: "auto",
										position: "relative",
										overflow: "hidden",
										backgroundColor: "transparent",
										border: "none",
										":hover": {
											"::before": {
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												backgroundColor: "#091E4224",
											},
											backgroundColor: "transparent",
										},
									}}
								>
									<img
										style={{
											height: "32px",
											width: "40px",
											objectFit: "cover",
											borderRadius: 2,
										}}
										src={item.backgroundImage}
										alt="imagesColor"
									/>
									{showOverlay === index + 4 && <ActiveBacground />}
								</Button>
							</Tooltip>
						)
					})}
					<Button
						sx={{
							background: "#091E4224",
							width: "40px",
							height: "32px",
							minWidth: "auto",
							":hover": {
								backgroundColor: "#00000029",
							},
						}}
					>
						<MoreHorizIcon style={{ color: "black", fontSize: 24 }} />
					</Button>
				</Box>
				<Typography sx={{ mt: 1 }}>
					Board Tilte <span style={{ color: "red" }}>*</span>
				</Typography>
				<TextField
					variant="outlined"
					fullWidth
					value={inputValue}
					onChange={handleChange}
					error={!hasInput}
					sx={{
						"& .MuiInputBase-input": {
							padding: "10px",
							pl: "15px",
						},
						"& .MuiOutlinedInput-root": {
							p: 0,
							"& fieldset": {
								border: 3,
								borderColor: hasInput ? "#0c66e4" : "red",
							},
							"&:hover fieldset": {
								border: 3,
								borderColor: hasInput ? "#0c66e4" : "red",
							},
							"&.Mui-focused fieldset": {
								border: 3,
								borderColor: hasInput ? "#0c66e4" : "red",
							},
						},
					}}
				/>
				<Typography>👋 Board title is required</Typography>
			</Box>
			<Box sx={{ mt: 1 }}>
				<InputLabel sx={{ fontSize: 14, fontWeight: "bold" }} id="sort-by">
					Visibility
				</InputLabel>
				<Select
					sx={{
						width: "100%",
						wordBreak: "break-word",
						wordWrap: "break-word",
					}}
					label="Visibility"
					value={selectedVisibility}
					onChange={e => handleChangeVisibility(e)}
					renderValue={renderValue}
				>
					{visibilityList.map(item => (
						<MenuItem
							sx={{
								width: 282,
								pr: 1,
								wordBreak: "break-word",
								wordWrap: "break-word",
								color: selectedVisibility === item.title ? "#0c66e4" : "black",
							}}
							key={item.title}
							value={item.title}
						>
							<Box
								sx={{
									maxWidth: 282,
									display: "flex",
									gap: 2,
									alignItems: "center",
								}}
							>
								{item.icon}
								<Box>
									<Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
									<Typography sx={{ whiteSpace: "break-spaces" }}>
										{item.text}
									</Typography>
								</Box>
							</Box>
						</MenuItem>
					))}
				</Select>
				<Typography sx={{ mt: 1 }}>
					This Workspace has 5 boards remaining. Free Workspaces can only have 10 open
					boards. For unlimited boards, upgrade your Workspace.
				</Typography>
				<Button
					disabled={!hasInput}
					sx={{
						width: "100%",
						background: hasInput ? "#0c66e4" : "",
						color: hasInput ? "white" : "black",
						":hover": {
							background: "#0956c2",
						},
					}}
					onClick={() => {
						if (Array.isArray(boardList))
							setBoardList([
								...boardList,
								{
									title: inputValue,
									visibility: selectedVisibility,

									backgroundImage:
										showOverlay > 3
											? colorsList[showOverlay - 4].backgroundImage
											: imagesList[showOverlay].imageUrl,
								},
							])
						handleTooltipClose(false)
					}}
				>
					Create
				</Button>
			</Box>
		</Box>
	)
}
