/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: Routes management component...
	Date: 28 july 2022
	Filename: apiRoutes.js
*/

// import from another file
import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Chat from "../pages/Chat"
import Conversation from "../components/Conversation"
import dakPion from "../assets/illustration.png"

const ManageRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Chat />} />
				<Route path="/chat" element={<Chat />}>
					<Route
						index
						element={
							<div className="w-full h-full flex justify-center items-center flex-col">
								<img
									className="max-h-40"
									src={dakPion}
									alt=""
								/>
								<h1 className="font-edu text-3xl font-bold text-secondary">
									Dak pion
								</h1>
							</div>
						}
					/>
					<Route path=":username" element={<Conversation />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	)
}

export default ManageRoutes
