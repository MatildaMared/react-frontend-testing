import React, { useState } from "react";
import styled from "styled-components";

function NameInput() {
	const [validity, setValidity] = useState("");
	const [name, setName] = useState("");

	function validateName(name: string) {
		if (name.length === 0) {
			setValidity("");
		} else if (!/^[a-zA-Z ]+$/.test(name)) {
			setValidity("invalid");
		} else {
			setValidity("valid");
		}
	}

	function onNameChange(e: any) {
		setName(e.target.value);
		validateName(e.target.value);
	}

	return (
		<div>
			{name.length > 0 && validity !== "invalid" ? (
				<h1>Hej {name}! 😀</h1>
			) : (
				<h1>Var vänlig skriv ditt namn! 😀</h1>
			)}
			<Input
				value={name}
				type="text"
				placeholder="Ditt Namn"
				className={validity}
				onChange={onNameChange}
			/>
		</div>
	);
}

const Input = styled.input`
	border: none;
	padding: 0.5rem 1rem;
	border-bottom: 2px solid #5b5b5b;
	outline-offset: 4px;

	&:focus {
		outline: 3px dotted #ddd;
	}

	&.valid {
		border-bottom: 2px solid #569e56;
	}

	&.invalid {
		border-bottom: 2px solid #d9534f;
	}
`;

export default NameInput;
