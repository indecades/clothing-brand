import React from "react";
import "./products.css";
const Products = () => {
	// ***** Please refer to the notes at the end of each javascript file *****//
	// shopping items array and details
	const products = [
		{
			name: "Vintage Tea dress",
			description:
				"A warm beige tea dress inspired by Marie Antionettes' silk vintage style dress collections. One-size fits all, thus this dress is adjustable by it's back lint.",
			price: 2230.18,
		},
		{
			name: "Marie Antoinette Ball Gown",
			description:
				"A soft antique white dress to shimmer under the ball lights. This antique Ball Gown was first revealed in a french designer show in 1980.",
			price: 2698.73,
		},
		{
			name: "70s Bridal Priarie Dress",
			description:
				"This high end luxury french dress with a slimming romantic cinched waist Tie-up that will make any bride shine on their special day.",
			price: 2532.62,
		},
	];

	return (
		<div className="products-container">
			{products.map((product) => (
				<div>
					<hr />
					<h5>Exclusive item</h5>
					<h3 className="product-name">{product.name}</h3>
					<br />
					<p className="product-description">{product.description}</p>
					<br />
					<p className="product-price">R{product.price}+Tax</p>
					<br />
					<hr />
				</div>
			))}
		</div>
	);
};

export default Products;

//notes:
//
// e.g {name} to display the product names on the page
// products is being mapped through using the parameter product
//
