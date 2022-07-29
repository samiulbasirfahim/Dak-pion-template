/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: Message component from chat application
	Date: 28 july 2022
	Filename: message.js
*/

// import from another file
import React from "react"

// Message component
const Message = ({ messages }) => {
	return (
		<div className="bg-gray-800 py-2 px-4 mt-6 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm">
			<h1 className="text-white text-2xl font-bold">Hello world</h1>
			<p className="text-white">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			</p>
		</div>
	)
}

export default Message
