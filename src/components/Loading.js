/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: Loading component for chat application
	Date: 28 july 2022
	Filename: loading.js
*/

// import from another file
import React from "react"

// Loading component
const Loading = () => {
	return (
		<div className="fixed top-0 left-0 bg-gray-600/10 backdrop-blur-xl flex justify-center items-center w-screen h-screen">
			<h3 className="text-yellow-500 font-edu font-extrabold py-1 text-5xl">
				Loading ...
			</h3>
		</div>
	)
}

export default Loading
