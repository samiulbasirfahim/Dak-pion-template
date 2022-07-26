/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This is registration component for the Chat application.
    Date: 27 july 2022
    Filename: register.js
*/

import React from "react"

const Register = () => {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<form className="bg-green-600/20 flex flex-col p-14 rounded-tl-3xl rounded-br-3xl">
				<h1 className="text-red-700  text-6xl uppercase text-center mb-8 font-mono">
					Dak pion
				</h1>
				<input
					type="text"
					className="mb-6 py-2 focus:outline-2  bg-gray-600 focus:bg-gray-300 rounded-md px-4 placeholder:text-white font-mono focus:placeholder:text-gray-600"
					placeholder="text"
				/>
				<input
					type="username"
					className="mb-6 py-2 focus:outline-2 bg-gray-600 focus:bg-gray-300 rounded-md px-4  placeholder:text-white font-mono focus:placeholder:text-gray-600"
					placeholder="text"
				/>
				<input
					type="password"
					className="mb-6 py-2 focus:outline-2 bg-gray-600 focus:bg-gray-300 rounded-md px-4 placeholder:text-white font-mono focus:placeholder:text-gray-600"
					placeholder="text"
				/>
				<input
					type="password"
					className="mb-6 py-2 focus:outline-2 bg-gray-600 focus:bg-gray-300 rounded-md px-4 placeholder:text-white font-mono focus:placeholder:text-gray-600"
					placeholder="text"
				/>
				<input
					type="submit"
					value="register"
					className="bg-green-500 rounded-xl uppercase font-bold text-white text-lg py-2"
				/>
			</form>
		</div>
	)
}

export default Register
