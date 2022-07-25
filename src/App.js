/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: this is app component, which contains all of the functionality and component of this application
    Date: 25 july 2022
    Filename: app.js
*/

// import from another file
import Modals from "./components/modals/Modals"
import Login from "./pages/Login"

// app component
const App = () => {
	return (
		<div>
			<Login />
			<Modals />
		</div>
	)
}

export default App
