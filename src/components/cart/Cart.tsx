import React, { useState } from "react";
import styled from "styled-components";

function Cart() {
	const [totalCart, setTotalCart] = useState(0);
	const [cartWithoutDiscount, setCartWithoutDiscount] = useState(0);
	const price = 100;
	const addProductHandler = () => {
		const newTotal = cartWithoutDiscount + price;
		setCartWithoutDiscount(newTotal);
		if (newTotal < price * 3) {
			setTotalCart(newTotal);
		} else {
			setTotalCart(newTotal - newTotal * 0.25);
		}
	};

	return (
		<div>
			<h1>Din kundvagn: {totalCart} kr</h1>
			<ProductWrapper>
				<h2>👠 Röda klackskor</h2>
				<span>{price} kr</span>
				<button onClick={addProductHandler}>Lägg till i kundvagn</button>
			</ProductWrapper>
		</div>
	);
}

const ProductWrapper = styled.div`
	border: 1px solid #ddd;
	width: fit-content;
	margin: 0 auto;
	padding: 2rem;

	& h2 {
		margin: 0;
		margin-bottom: 1rem;
	}
`;

export default Cart;
