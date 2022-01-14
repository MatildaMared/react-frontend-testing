import React, { useState } from "react";

interface Props {
	items: string[];
	setView: Function;
}

function Navbar(props: Props) {
	const [activeElement, setActiveElement] = useState(0);

	const onClickHandler = (index: number) => {
		setActiveElement(index);
		props.setView(index);
	};

	return (
		<ul className="navbar">
			{props.items.map((item, index) => (
				<li
					key={item}
					className={index === activeElement ? "selected" : ""}
					onClick={() => onClickHandler(index)}
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export default Navbar;
