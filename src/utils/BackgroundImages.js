import React from "react"
import background from "../assets/background.jpg"

const BackgroundImages = () => {
	return (
		<div>
			<div>
				<img
					src={background}
					className="absolute left-0 top-0 w-screen h-screen -z-50"
					alt=""
				/>
				<div className="absolute left-0 top-0 w-screen h-screen bg-black/70 -z-40" />
			</div>
		</div>
	)
}

export default BackgroundImages
