/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: Chat page form chat application
	Date: 26 july 2022
	Filename: chat.js
*/


// import from another file
import React, { useEffect } from "react"
import io from "socket.io-client"
const socket = io.connect("http://localhost:4000/")


// Chat page component
const Chat = () => {
	useEffect(() => {
		
	}, [socket])
	return <div></div>
}

export default Chat
