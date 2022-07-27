import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

const ManageRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	)
}

export default ManageRoutes
