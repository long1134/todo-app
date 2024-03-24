import { Box } from "@mui/material"
import Divider from "@mui/material/Divider"

import { WorkspaceHeader } from "./WorkspaceHeader"
import { WorkspaceBody } from "./WorkspaceBody"
export const Workspace = () => {
	return (
		<Box sx={{ pt: 4 }}>
			<WorkspaceHeader />
			<Divider sx={{ m: 5, borderColor: "gray" }} />
			<WorkspaceBody />
		</Box>
	)
}
