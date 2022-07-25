/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: Login page for chat application
    Date: 25 july 2022
    Filename: login.js
*/

// imports from another file
import React from "react"

// login component
function Login() {
	const handleLoginForm = (e) => {
		e.preventDefault()
		const username = e.target.username.value
		const password = e.target.password.value
		console.log(username, password)
	}
	return (
		<div className="absolute left-0 top-0 h-screen w-screen flex justify-center items-center">
			<div className="bg-secondary/10 px-6 py-6 rounded">
				<h1 className="font-mono text-6xl text-center text-primary pt-8">
					Dak pion
				</h1>
				<p className="font-mono text-sm text-center pb-10">
					a minimal chat application
				</p>
				<form
					onSubmit={handleLoginForm}
					className="grid justify-items-center grid-cols-1 gap-y-4"
				>
					<input
						type="text"
						name="username"
						placeholder="Username here ..."
						class="input w-full max-w-xs"
					/>
					<input
						type="password"
						name="password"
						placeholder="Password here ..."
						class="input w-full max-w-xs"
					/>
					<input
						type="submit"
						value="Login"
						className="btn btn-active btn-primary/20"
					/>
				</form>
				<div className="flex justify-center w-full mt-16">
					<label for="my-modal-6" class="btn btn-ghost btn-sm">
						Support
					</label>
				</div>
			</div>
		</div>
	)
}

export default Login
