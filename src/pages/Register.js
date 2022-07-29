/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This is register page for the chat application
    Date: 27 july 2022
    Filename: register.js
*/

// import from another files
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import illustration from "../assets/illustration.png"
import Loading from "../components/Loading"
import { registerApi } from "../utils/apiRoutes"

const Register = () => {
	const [error, setError] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	})
	const [registerInfo, setRegisterInfo] = React.useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	})
	const [isLoading, setIsLoading] = React.useState(false)
	React.useEffect(() => {
		const userNameArray = registerInfo.username.split("")
		if (userNameArray.includes(" ")) {
			return setError({
				...error,
				username: "You cant use whitespace in username",
			})
		} else {
			return setError({ ...error, username: "" })
		}
	}, [registerInfo.username])
	React.useEffect(() => {
		if (registerInfo.password.length < 8) {
			return setError({
				...error,
				password: "You must have at least 8 characters",
			})
		} else {
			return setError({
				...error,
				password: "",
			})
		}
	}, [registerInfo.password])
	React.useEffect(() => {
		if (registerInfo.password !== registerInfo.confirmPassword) {
			setError({ ...error, confirmPassword: "Confirm Password mismatch" })
		} else {
			setError({ ...error, confirmPassword: "" })
		}
	}, [registerInfo.confirmPassword])
	const handleInput = (event) => {
		const fieldName = event.target.name
		const value = event.target.value
		console.log(fieldName)
		setRegisterInfo({
			...registerInfo,
			[fieldName]: value,
		})
	}

	const handleRegister = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		const res = await axios.post(registerApi, registerInfo)
		setIsLoading(false)
		switch (res.data.errorOn) {
			case "username":
				setError({
					...error,
					username: res.data.message,
				})
				break
			case "email":
				setError({
					...error,
					email: res.data.message,
				})
			default:
				break
		}
	}
	return (
		<div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
			<div className="bg-primary 2xl:w-[60vw] xl:w-[70vw] min-h-[70vh] lg:w-[80vw] md:w-[50vw] w-[300px] rounded-xl flex justify-center p-8">
				<div className="w-full flex items-center flex-col lg:mt-14 mt-2">
					<img
						src={illustration}
						alt="illustration"
						className="max-w-[100px]"
					/>
					<h1 className="text-4xl text-secondary font-bold font-edu">
						Dak Pion
					</h1>

					<form
						className="flex flex-col md:mt-16 mt-2 pb-2"
						onSubmit={handleRegister}
					>
						{isLoading && <Loading />}
						<input
							type="text"
							name="username"
							onChange={(event) => handleInput(event)}
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Username here ..."
						/>
						<h5 className="text-red-500 font-edu text-md py-1">
							{error.username}
						</h5>
						<input
							type="email"
							name="email"
							onChange={(event) => handleInput(event)}
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Email here ..."
						/>
						<h5 className="text-red-500 font-edu text-md py-1">
							{error.email}
						</h5>
						<input
							type="password"
							name="password"
							onChange={(event) => handleInput(event)}
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Password here ..."
						/>
						<h5 className="text-red-500 font-edu text-md py-1">
							{error.password}
						</h5>
						<input
							type="password"
							name="confirmPassword"
							onChange={(event) => handleInput(event)}
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Confirm password here ..."
						/>
						<h5 className="text-red-500 font-edu text-md py-1">
							{error.confirmPassword}
						</h5>

						<input
							type="submit"
							value="Register"
							className="bg-secondary mt-3 py-2 rounded-tl-3xl rounded-br-3xl"
						/>

						<Link
							to={"/login"}
							className="text-blue-700 font-edu font-bold text-lg mt-3 underline"
						>
							Already have an account?
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
