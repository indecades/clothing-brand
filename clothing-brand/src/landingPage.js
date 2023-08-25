import React from "react";
import "./landingPage.css";
const landingPage = () => {
	// ***** Please refer to the notes at the end of each javascript file *****//
	return (
		<div className="landingPage-container">
			<hr />
			<h2 className="main-heading-page">Unique, luxury and antique.</h2>
			<br />
			<h3 className="l-heading">What is Boton known for?</h3>
			<br />
			<p className="l-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Habitant morbi
				tristique senectus et netus. Enim ut tellus elementum sagittis vitae et
				leo. Phasellus faucibus scelerisque eleifend donec pretium vulputate.
				Consectetur lorem donec massa sapien faucibus et. Varius sit amet mattis
				vulputate enim nulla. Felis imperdiet proin fermentum leo vel orci.{" "}
			</p>
			<br />
			<p className="l-text">
				Lectus quam id leo in. Platea dictumst vestibulum rhoncus est
				pellentesque. Integer quis auctor elit sed vulputate mi sit amet.
				Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Vitae
				congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque.
				Iaculis urna id volutpat lacus laoreet. Ultrices in iaculis nunc sed
				augue lacus viverra vitae congue. In fermentum et sollicitudin ac. Diam
				donec adipiscing tristique risus nec feugiat. Amet nisl purus in mollis
				nunc sed id semper.
			</p>
			<br />
			<p className="slogan">~Luxury needs no explanation</p>
			<br />
			<hr />
		</div>
	);
};

export default landingPage;

//notes:
//
// landingPage-container div is used to change the background of the whole landing page area
// main heading and sub heading to give the user more information
// paragraphs to explain what the company is about
// breaks <br/> are being used to space out the paragraphs more
// company slogan is being used last
//
