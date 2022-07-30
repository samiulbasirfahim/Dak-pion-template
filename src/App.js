/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: this is app component, which contains all of the functionality and component of this application
    Date: 25 july 2022
    Filename: app.js
*/

// import from another file
import useAuthState from "./hooks/useAuthState"
import BackgroundImages from "./utils/BackgroundImages"
import ManageRoutes from "./utils/Routes"

// app component
const App = () => {
	const auth = useAuthState()
	return (
		<div className="overflow-x-hidden">
			<BackgroundImages />
			<ManageRoutes />
		</div>
	)
}

export default App
