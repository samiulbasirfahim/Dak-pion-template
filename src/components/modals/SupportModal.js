/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This file used for store support modal component
    Date: 25 july 2022 
    Filename: supportModal.js
*/

import React from "react"

const SupportModal = () => {
	return (
		<div>
			<input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<h3 class="font-bold text-lg">
						Hello there, I am here to help you,
					</h3>
					<p class="py-4">
						If you have any questions, feel free to ask me...
					</p>
					<div className="flex justify-between">
						<a
							className="btn btn-link btn-secondary"
							href="https://www.facebook.com/callbackcat"
							target="_blank"
							rel="noreferrer"
						>
							Facebook
						</a>
						<a
							href="mailto:samiulbasirfahim360@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="btn btn-link btn-secondary"
						>
							Email
						</a>
						<a
							className="btn btn-link btn-secondary"
							href="https://www.github.com/samiulbasirfahim"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</div>
					<div class="modal-action flex justify-center">
						<label for="my-modal-6" class="btn btn-sm">
							Close!
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SupportModal
