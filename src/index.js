/*
    Author: Samiul Basir Fahim
    Title: Chat application
    Description: This is index or core file for the chat application
    Date: 25 july 2022
    Filename: index.js
*/

// import from another file
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// render react dom
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
