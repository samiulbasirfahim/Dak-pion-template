/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This is login component for the Chat application.
    Date: 27 july 2022
    Filename: login.js
*/

// import from another files
import React from "react"
import illustration from "../assets/illustration.png"

const Login = () => {
	return (
		<div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
			<div className="bg-primary 2xl:w-[60vw] xl:w-[70vw] h-[70vh] lg:w-[80vw] md:w-[50vw] w-[300px] rounded-xl">
				<div className="w-full flex items-center flex-col mt-8">
					<img
						src={illustration}
						alt="illustration"
						className="max-w-[120px]"
					/>
					<h1 className="text-4xl text-secondary font-bold font-edu">
						Dak Pion
					</h1>
					<form className="flex flex-col">
						<input
							type="text"
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Username here ..."
						/>
						<input
							type="text"
							className="bg-neutral rounded mt-3 py-2 border-2 border-secondary text-white pl-2 w-[260px] placeholder:font-edu placeholder:text-gray-500"
							placeholder="Password here ..."
						/>
						<input
							type="submit"
							value="Login"
							className="bg-secondary mt-3 py-2 rounded-tl-3xl rounded-br-3xl"
						/>
						<input
							type="reset"
							value="Clear"
							className="btn btn-link text-red-600"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
