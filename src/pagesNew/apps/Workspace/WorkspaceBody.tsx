import {
	Box,
	Button,
	ClickAwayListener,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import { relative } from "path"
import { ActiveBacground, BoardCreateTooltip } from "./BoardCreateTooltip"
import { Link } from "react-router-dom"
export type BoardType = {
	title: string
	backgroundImage: string
	visibility: string
}
export const WorkspaceBody = () => {
	const [open, setOpen] = useState(false)

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipOpen = () => {
		setOpen(true)
	}
	const [boardList, setBoardList] = useState<BoardType[]>([])

	return (
		<Box sx={{ m: 5 }}>
			<Typography sx={{ fontSize: "1.2rem" }} variant="h1">
				Boards
			</Typography>
			<Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", gap: 1 }}>
					<Box>
						<InputLabel sx={{ fontSize: 12, fontWeight: "bold" }} id="sort-by">
							Sort by
						</InputLabel>
						<Select
							sx={{ width: 200 }}
							SelectDisplayProps={{ style: { paddingTop: 10, paddingBottom: 8 } }}
							labelId="sort-by"
							label="sort by"
							value={40}
						>
							<MenuItem value={40}>Most recently active</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</Box>
					<Box>
						<InputLabel sx={{ fontSize: 12, fontWeight: "bold" }} id="filter-by">
							Filter by
						</InputLabel>
						<Select
							sx={{ width: 200 }}
							SelectDisplayProps={{ style: { paddingTop: 10, paddingBottom: 8 } }}
							labelId="filter-by"
							label="filterby"
							value={40}
						>
							<MenuItem value={40}>Most recently active</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</Box>
				</Box>
				<Box>
					<InputLabel sx={{ fontSize: 12, fontWeight: "bold" }} id="search-boards">
						Search
					</InputLabel>
					<TextField
						id="search-boards"
						size="small"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LuSearch size={20} />
								</InputAdornment>
							),
						}}
						variant="outlined"
						placeholder="Search boards..."
					/>
				</Box>
			</Box>
			<Box sx={{ mt: 5, display: "flex", gap: 2, flexWrap: "wrap" }}>
				<Box sx={{ width: 250, height: 98 }}>
					<ClickAwayListener onClickAway={handleTooltipClose}>
						<Box>
							<Tooltip
								componentsProps={{
									tooltip: {
										sx: {
											color: "black",
											backgroundColor: "white",
										},
									},
								}}
								PopperProps={{
									disablePortal: true,
								}}
								placement="right"
								onClose={handleTooltipClose}
								open={open}
								disableFocusListener
								disableHoverListener
								disableTouchListener
								title={
									<BoardCreateTooltip
										handleTooltipClose={setOpen}
										boardList={boardList}
										setBoardList={setBoardList}
									/>
								}
							>
								<Box
									sx={{
										p: 1,
										backgroundColor: "#091E420F",
										maxWidth: 250,
										pt: 3,
										pb: 3,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
										cursor: "pointer",
										":hover": {
											backgroundColor: "#091E420F",
										},
									}}
									onClick={handleTooltipOpen}
								>
									<Box>
										<Typography>Create new board</Typography>
										<Typography sx={{ textAlign: "center", mt: 1 }}>
											6 remaining
										</Typography>
										<Tooltip
											componentsProps={{
												tooltip: {
													sx: {
														backgroundColor: "white",
													},
												},
											}}
											sx={{ position: "absolute ", bottom: 0, right: 0 }}
											placement="right-end"
											title={
												<Box sx={{ background: "white", p: 1 }}>
													<Typography
														sx={{ fontSize: 12, color: "black" }}
													>
														Free Workspaces can have up to 10 open
														boards. For unlimited boards, upgrade this
														Workspace.
													</Typography>
													<Typography
														sx={{
															mt: 2,
															fontSize: 18,
															fontWeight: "bold",
															color: "blue",
														}}
													>
														Upgrade
													</Typography>
												</Box>
											}
										>
											<IconButton>
												<HelpOutlineIcon />
											</IconButton>
										</Tooltip>
									</Box>
								</Box>
							</Tooltip>
						</Box>
					</ClickAwayListener>
				</Box>
				{boardList.map(board => (
					<Link to="">
						<Box
							sx={{
								p: 0,
								maxWidth: 250,
								maxHeight: 98,
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
							<Typography
								sx={{
									position: "absolute",
									top: 10,
									left: 10,
									fontWeight: "bold",
									color: "white",
									zIndex: 2,
								}}
							>
								{board.title}
							</Typography>
							<img
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover",
									borderRadius: 2,
								}}
								src={board.backgroundImage}
								alt="imagesColor"
							/>
							<ActiveBacground isNotChecked />
						</Box>
					</Link>
				))}
			</Box>
		</Box>
	)
}
