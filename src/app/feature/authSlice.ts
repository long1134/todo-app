import { unstable_gridTabIndexColumnHeaderFilterSelector } from "@mui/x-data-grid"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { User } from "@src/types/auth"

export interface authState {
	isAuthenticated: boolean
	loading: boolean
	user: User | undefined
}

const initialState: authState = {
	isAuthenticated: false,
	loading: true,
	user: undefined,
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		saveSession: (state, action: PayloadAction<User>) => {
			;(state.isAuthenticated = true), (state.loading = false)
			const user = action.payload
			state.user = user
			const userInfo = JSON.stringify(user)
			localStorage.setItem("loginUser", userInfo)
		},
		logout: state => {
			state.isAuthenticated = false
			state.loading = true
			state.user = undefined
			localStorage.removeItem("loginUser")
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { saveSession, logout, setLoading } = authSlice.actions

export default authSlice.reducer
