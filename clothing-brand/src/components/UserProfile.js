import React from "react";
import '../userProfile.css'
const handleLogout = () => {
	alert("user has logged out");
};

const UserProfile = () => {
	return (
		<div className="userProfile-container">
      <h2 className="userProfile-heading">Thank you for your support!</h2>
      <p className="userP-slogan">~Luxury needs no explanation</p>
      <br/>
			<button className="logout-button" onClick={handleLogout}>Logout</button>
      <br/>
      <br/>
		</div>
	);
};

export default UserProfile;
//notes:
//
// if the user clicks the logout button the alert will run in the handleLougout function
