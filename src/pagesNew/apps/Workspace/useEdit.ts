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
import { TUser } from "@src/common/fake-backend"

const editUserFormSchema = yup.object({
	name: yup.string().required("Please enter name"),
	shortName: yup.string().required("Please enter ShortName"),
	website: yup.string(),
	description: yup.string(),
})

export default function useEditUser() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(editUserFormSchema),
		defaultValues: {
			name: "demo@demo.com",
			shortName: "userworkspace32727897222222",
		},
	})

	type EditUserFormFields = yup.InferType<typeof editUserFormSchema>

	const redirectUrl = useMemo(() => (location.state?.from.pathname, "/"), [location.state])

	const save = handleSubmit(async (values: EditUserFormFields) => {
		setLoading(true)
		try {
			console.log(values)
			const res: AxiosResponse<TUser> = await HttpClient.post(
				"/https://todo-app-production-c8ec.up.railway.app/auth/login",
				values
			)
			if (res.data.token) {
				dispatch(
					saveSession({
						...(res.data ?? {}),
						token: res.data.token,
					})
				)

				navigate(redirectUrl)
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
