import React from "react"
import { useParams } from "react-router-dom"

const Conversation = () => {
	const params = useParams()
	console.log(params)
	return (
		<div>
			<div className="w-full h-full flex justify-center items-center flex-col">
				{/* <img className="max-h-40" src={dakPion} alt="" /> */}
				<h1 className="font-edu text-3xl font-bold text-secondary">
					{params.username}
				</h1>
			</div>
		</div>
	)
}

export default Conversation
