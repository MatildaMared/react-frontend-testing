import React, { useState } from "react";

interface Props {
	items: string[];
}

function Navbar(props: Props) {
	const [activeElement, setActiveElement] = useState(0);
	return (
		<ul className="navbar">
			{props.items.map((item, index) => (
				<li
					key={item}
					className={index === activeElement ? "selected" : ""}
					onClick={() => setActiveElement(index)}
				>
					{item}
				</li>
			))}
		</ul>
	);
}

export default Navbar;
