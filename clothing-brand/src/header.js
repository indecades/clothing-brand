import React from "react";
import "./header.css";
import Menu from "./components/Menu";
export default function header({ isLoggedIn }) {
	// ***** Please refer to the notes at the end of each javascript file *****//
	return (
		<div className="header-background">
			<Menu />
			<hr />
			<img
				className="logo"
				src={
					"https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80"
				}
				alt="Logo"
			/>
			<h1 className="main-heading">Bonton</h1>
			<b className="login">{isLoggedIn ? "Welcome back!" : "Sign up"}</b> <br />
			<hr />
		</div>
	);
}
//notes:
//
//I used the link provided to display the logo onto the page
// if isLoggedIn is true display "Welcome back!"
//* if isLoggedIn is false display "Sign up"
//<hr/> horisontal lines are added to all the pages for styling as well as <br/> breaks
//
