import "./App.css";
import Header from "./header";
import Products from "./products";
import LandingPage from "./landingPage";
import UserProfile from "./components/UserProfile";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LegalPage from "./components/LegalPage";
import InterestCalculator from "./components/InterestCalculator";
function App() {
	// ***** Please refer to the notes at the end of each javascript file *****//
	const isLoggedIn = true; // user is logged in thus the boolean is true 
	//all 3 products with parameters of name, description and price for each product


	return (
		<BrowserRouter>
		<div className="App">
		<Header isLoggedIn={isLoggedIn}/> 
		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/Shopping-page" element={<Products/>}/>
			<Route path="/User-profile" element={<UserProfile/>}/>
			<Route path="/Legal-page" element={<LegalPage/>}/>
			<Route path="/Calculator" element={<InterestCalculator/>}/>
		</Routes>
		</div>
		</BrowserRouter>
	);
}

export default App;

//notes:
//
// islogged in in the header is = isloggedin(true)
//
//	steps:
// </BrowserRouter>
//	<Routes>
// e.g <Route path="/" element={<LandingPage/>}/>