import React, { useState } from "react";
// import useState
import "../interestCal.css";
// import css file
const InterestCalculator = () => {
	const [total, setTotal] = useState("");
	const [months, setMonths] = useState("");
	const [monthlyPayment, setMonthlyPayment] = useState("");
	const [totalPayment, setTotalPayment] = useState("");
	// useState & set values
	const handleTotal = (e) => {
		setTotal(e.target.value);
		console.log(total);
	};
	//handleTotal setTotal to event target value
	const handleMonths = (e) => {
		setMonths(e.target.value);
		console.log(months);
	};
	//handleMonths setMonths to event target value
	const calculate = () => {
		const interestRate = 0.2;
		const interestTotal = total * interestRate;
		const finalInterestTotal = parseInt(interestTotal);
		const firstTotal = parseInt(total);
		const finalTotal = finalInterestTotal + firstTotal;
		const month = finalTotal / months;
		setTotalPayment(finalTotal);
		setMonthlyPayment(month);
	};
	// claculation summary
	// total x interest
	// add amount of interest to total
	// divide final total with amount of months
	//* parseInt to convert the string into a number
	return (
		<div className="calculator-container">
			<h1 className="heading">Interest Calculator</h1>
			<hr />
			<label className="labels"> Total Amount </label>
			<input
				className="input"
				onChange={handleTotal}
			></input>
			<br />
			<br />
			<label className="labels"> Total Months</label>
			<input
				className="input"
				onChange={handleMonths}
			></input>
			<br />
			<br />
			<button
				className="button"
				onClick={calculate}
			>
				Calculate
			</button>
			<br />
			<h3 className="sub-heading">Monthly payment, R{monthlyPayment}</h3>
			<h3 className="sub-heading">Total payment, R{totalPayment}</h3>
			<br />
		</div>
	);
};

export default InterestCalculator;

//notes:
// calculator-container page container to change background image
// labels for the input
// input: onChange will run the functions using the users input values
// button: onClick will run the calculate function so when the user clicks the button the function will run
// h3 to display the calculated values
