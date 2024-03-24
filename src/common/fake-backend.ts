import axios from "axios"
import MockAdapter from "axios-mock-adapter"

export type TUser = {
	id?: string

	email?: string
	password?: string
	name: string
	role?: string
	token?: string
	imageSrc?: string
	status?: string
}

const usersData: TUser[] = [
	{
		id: "1",
		name: "Thinh",
		status: "active",
		imageSrc: "https://mui.com/static/images/avatar/1.jpg",
	},
	{
		id: "2",
		name: "Long",
		status: "active",
		imageSrc: "",
	},
	{
		id: "3",
		name: "SUPER",
		status: " not active",
		imageSrc: "https://mui.com/static/images/avatar/1.jpg",
	},
	{
		id: "4",
		name: "SUPER",
		status: " not active",
		imageSrc: "https://mui.com/static/images/avatar/1.jpg",
	},
	{
		id: "5",
		name: "SUPER",
		status: " not active",
		imageSrc: "https://mui.com/static/images/avatar/1.jpg",
	},
]

const mock = new MockAdapter(axios)

export function configureFakeBackend() {
	const users: TUser[] = [
		{
			id: "1",
			email: "demo@demo.com",
			name: "demo",
			password: "password",
			role: "Admin",
			token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
		},
	]

	mock.onPost("/login").reply(function (config) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data)

				// find if any user matches login credentials
				const user = users.find(user => {
					return user.email === params.email && user.password === params.password
				})

				if (user) {
					// if login details are valid return user details and fake jwt token
					resolve([200, user])
				} else {
					// else return error
					resolve([401, { error: "Username or password is incorrect" }])
				}
			}, 1000)
		})
	})

	mock.onPost("/register/").reply(function (config) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data)

				// add new users
				const [name] = params.name.split(" ")
				const newUser: TUser = {
					id: users.length + 1 + "",
					name: name,
					password: params.password,

					role: "Admin",
					token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJIeXBlciJ9.P27f7JNBF-vOaJFpkn-upfEh3zSprYfyhTOYhijykdI",
				}
				users.push(newUser)

				resolve([200, newUser])
			}, 1000)
		})
	})

	mock.onPost("/forgot-password/").reply(function (config) {
		return new Promise(function (resolve) {
			setTimeout(function () {
				// get parameters from post request
				const params = JSON.parse(config.data)

				// find if any user matches login credentials
				const filteredUsers = users.filter(user => {
					return user.name === params.name
				})

				if (filteredUsers.length) {
					// if login details are valid return user details and fake jwt token
					const responseJson = {
						message:
							"We've sent you a link to reset password to your registered email.",
					}
					resolve([200, responseJson])
				} else {
					// else return error
					resolve([
						401,
						{
							message:
								"Sorry, we could not find any registered user with entered username",
						},
					])
				}
			}, 1000)
		})
	})

	mock.onGet("/allUsers").reply(200, usersData)
}
