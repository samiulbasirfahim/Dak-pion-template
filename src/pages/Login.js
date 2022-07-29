/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This is login component for the Chat application.
    Date: 27 july 2022
    Filename: login.js
*/

// import from another files
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import illustration from "../assets/illustration.png"
import { loginApi } from "../utils/apiRoutes"

// login component
const Login = () => {
	const handleLogin = async (e) => {
		e.preventDefault()
		const loginInfo = {}
		loginInfo.username = e.target.username.value
		loginInfo.password = e.target.password.value
		const res = await axios.post(loginApi, loginInfo)
		console.log(res.data)
	}

	return (
		<div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
			<div className="bg-primary 2xl:w-[60vw] xl:w-[70vw] min-h-[70vh] lg:w-[80vw] md:w-[50vw] w-[300px] rounded-xl flex justify-center ">
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
						onSubmit={handleLogin}
					>
						<input
							type="text"
							name="username"
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Username here ..."
						/>
						<input
							type="password"
							name="password"
							required
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Password here ..."
						/>
						<input
							type="submit"
							value="Login"
							className="bg-secondary mt-3 py-2 rounded-tl-3xl rounded-br-3xl"
						/>

						<Link
							to={"/register"}
							className="text-blue-700 font-edu font-bold text-lg mt-3 underline"
						>
							Don't have an account?
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
