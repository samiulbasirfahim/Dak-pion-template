import React, { useEffect } from "react"
import { verifyLogin } from "../utils/apiRoutes"

const useAuthState = () => {
	const [authState, setAuthState] = React.useState(null)
	const user = JSON.parse(localStorage.getItem("user"))
	useEffect(() => {
		fetch(verifyLogin, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setAuthState(data.user)
				} else {
					setAuthState(null)
				}
			})
	}, [user])
}
export default useAuthState
