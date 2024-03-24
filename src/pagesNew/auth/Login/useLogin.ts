import { useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios, { Axios, AxiosResponse } from "axios"
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"

import * as yup from "yup"
import { useSnackbar } from "notistack"
import { useAppDispatch, useAppSelector } from "@src/app/hooks"
import { RootState } from "@src/app/store"
import { saveSession } from "@src/app/feature/authSlice"
import { TUser } from "@src/common/fake-backend"
import { HttpClient } from "@src/helpers"

const loginFormSchema = yup.object({
	email: yup.string().email("Please enter valid email").required("Please enter email"),
	password: yup.string().required("Please enter password"),
	rememberMe: yup.boolean().oneOf([true], "Checkbox must be checked").optional(),
})

export default function useLogin() {
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(loginFormSchema),
		defaultValues: {
			email: "long3@gmail.com",
			password: "longvip113",
		},
	})

	type LoginFormFields = yup.InferType<typeof loginFormSchema>

	const redirectUrl = useMemo(() => (location.state?.from.pathname, "/"), [location.state])

	const login = handleSubmit(async (values: LoginFormFields) => {
		setLoading(true)
		try {
			const response = await fetch(
				"https://todo-app-production-c8ec.up.railway.app/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			)
			const data = await response.json()
			if (data) {
				dispatch(
					saveSession({
						...(data ?? {}),
						token: data.access_token,
					})
				)

				navigate(redirectUrl)
			}
		} catch (error: any) {
			console.log(error)
			if (error.response?.data?.error) {
				enqueueSnackbar(error.response?.data?.error, { variant: "error" })
			}
		} finally {
			setLoading(false)
		}
	})

	return { loading, login, redirectUrl, isAuthenticated, control }
}
