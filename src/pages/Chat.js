import React, { useEffect } from "react"
import io from "socket.io-client"
const socket = io.connect("http://localhost:4000/")

const Chat = () => {
	useEffect(() => {
		
	}, [socket])
	return <div></div>
}

export default Chat
