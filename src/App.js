/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: this is app component, which contains all of the functionality and component of this application
    Date: 25 july 2022
    Filename: app.js
*/

// import from another file
import background from "./assets/background.jpg"
import Register from "./pages/Register"

// app component
const App = () => {
	return (
		<div className="">
			<div>
				<img
					src={background}
					className="absolute left-0 top-0 w-screen h-screen -z-50"
					alt=""
				/>
				<div className="absolute left-0 top-0 w-screen h-screen bg-black/70 -z-40" />
			</div>
			<Register />
		</div>
	)
}

export default App
