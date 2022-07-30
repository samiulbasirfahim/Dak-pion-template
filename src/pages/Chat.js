/*
	Author: Samiul Basir Fahim
	Title: Chat application
	Description: Chat page form chat application
	Date: 26 july 2022
	Filename: chat.js
*/

// import from another file
import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import io from "socket.io-client"
import Contact from "../components/Contact"
const socket = io.connect("http://localhost:4000/")

// Chat page component
const Chat = () => {
	const userInfo = JSON.parse(localStorage.getItem("user"))
	useEffect(() => {}, [socket])

	const handleJoin = () => {
		socket.emit("join", "Hello from" + userInfo.username)
	}

	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
			<div className="bg-primary w-[90vw] h-[90vh] rounded-xl flex">
				<div className="w-[20vw] h-full bg-secondary flex flex-col px-4 rounded-l-xl">
					<Contact
						username={"world-chat"}
						avatar="https://cdn-icons-png.flaticon.com/512/183/183595.png"
					/>
					<Contact
						username={"fahim"}
						avatar={
							"https://raw.githubusercontent.com/learnwithsumit/chat-application/lesson-6/public/images/user1.png"
						}
					/>
					<Contact
						username={"fahim"}
						avatar={
							"https://raw.githubusercontent.com/learnwithsumit/chat-application/lesson-6/public/images/user1.png"
						}
					/>
					<Contact
						username={"fahim"}
						avatar={
							"https://raw.githubusercontent.com/learnwithsumit/chat-application/lesson-6/public/images/user1.png"
						}
					/>
					<Contact
						username={"fahim"}
						avatar={
							"https://raw.githubusercontent.com/learnwithsumit/chat-application/lesson-6/public/images/user1.png"
						}
					/>
				</div>
				<div className="w-full">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Chat
