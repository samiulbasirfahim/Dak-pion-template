import React from "react"
import { useNavigate } from "react-router-dom"

const Contact = ({ username, avatar }) => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate(`/chat/${username}`)
	}
	return (
		<div className="flex my-2 bg-neutral py-2 px-6 rounded-3xl cursor-pointer" onClick={handleClick}>
			<img className="w-10 h-10 " src={avatar} alt="" />
			<div className="ml-4 flex items-center h-full text-white">
				<h1 className="font-bold text-xl uppercase">{username}</h1>
			</div>
		</div>
	)
}

export default Contact
