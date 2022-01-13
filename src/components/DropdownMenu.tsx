import React, { useState } from "react";

function DropdownMenu() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav>
			<button onClick={() => setIsVisible(!isVisible)}>Menu</button>
			{isVisible && (
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			)}
		</nav>
	);
}

export default DropdownMenu;
