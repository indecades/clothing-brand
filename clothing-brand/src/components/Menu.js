import React from "react";
import { Link } from "react-router-dom";
import "../menu.css";
//import Link
const Menu = () => {
	return (
		<div className="menu">
			<Link
				className="homepage"
				to="/"
			>
				Homepage
			</Link>
			<Link
				className="user-profile"
				to="/User-profile"
			>
				User Profile
			</Link>
			<Link
				className="shopping-page"
				to="/Shopping-page"
			>
				Shopping Page
			</Link>
			<br />
			<br />
			<Link
				className="legal-page"
				to="/Legal-page"
			>
				Legal Page
			</Link>
			<Link
				className="calculator"
				to="/Calculator"
			>
				Calculator
			</Link>
		</div>
	);
};
// link to='link name'..link name used in app.js.. (display name)
export default Menu;
//notes:
// url:
// https://www.w3schools.com/react/react_router.asp
// Link:
// https://www.freecodecamp.org/news/react-router-tutorial/#:~:text=To%20add%20the%20link%20in,link%20if%20it%20is%20active.
// adding classname to style the menu text that is displayed
