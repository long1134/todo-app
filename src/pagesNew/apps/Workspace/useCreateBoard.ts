import { useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AxiosResponse } from "axios"
import { useForm } from "react-hook-form"
import { HttpClient } from "@src/helpers"

import { yupResolver } from "@hookform/resolvers/yup"
import type { User } from "@src/types"
import * as yup from "yup"
import { useSnackbar } from "notistack"
import { useAppDispatch, useAppSelector } from "@src/app/hooks"
import { RootState } from "@src/app/store"
import { saveSession } from "@src/app/feature/authSlice"

const boardFormSchema = yup.object({
	boardTitle: yup.string().required("Please enter board title"),
	visibility: yup.string(),
})

export default function useCreateBoard() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(boardFormSchema),
		defaultValues: {
			boardTitle: "",
			visibility: "Workspace",
		},
	})

	type BoardFormSchemaFields = yup.InferType<typeof boardFormSchema>

	const redirectUrl = useMemo(() => (location.state?.from.pathname, "/"), [location.state])

	const save = handleSubmit(async (values: BoardFormSchemaFields) => {
		setLoading(true)
		try {
			console.log(values)
			const res: AxiosResponse<User> = await HttpClient.post("/createBoard", values)
			if (res.data.token) {
				navigate("/workspace")
			}
		} catch (error: any) {
			if (error.response?.data?.error) {
				enqueueSnackbar(error.response?.data?.error, { variant: "error" })
			}
		} finally {
			setLoading(false)
		}
	})

	return { loading, save, redirectUrl, isAuthenticated, control }
}
