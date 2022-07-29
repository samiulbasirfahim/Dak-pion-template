/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: background image handler
	Date: 28 july 2022
	Filename: backgroundImage.js
*/

// import from another file
import React from "react"
import background from "../assets/background.jpg"

// background image component
const BackgroundImages = () => {
	return (
		<div>
			<div>
				<img
					src={background}
					className="fixed left-0 top-0 w-screen h-screen -z-50 bg-center"
					alt=""
				/>
				<div className="fixed left-0 top-0 w-screen h-screen bg-black/70 -z-40" />
			</div>
		</div>
	)
}

export default BackgroundImages
