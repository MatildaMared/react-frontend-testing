import React, { useState } from "react";

function Navbar() {
	const [activeElement, setActiveElement] = useState("home");
	return (
		<ul className="navbar">
			<li
				className={activeElement === "home" ? "selected" : ""}
				onClick={() => setActiveElement("home")}
			>
				Home
			</li>
			<li
				className={activeElement === "about" ? "selected" : ""}
				onClick={() => setActiveElement("about")}
			>
				About us
			</li>
			<li
				className={activeElement === "portfolio" ? "selected" : ""}
				onClick={() => setActiveElement("portfolio")}
			>
				Portfolio
			</li>
			<li
				className={activeElement === "blog" ? "selected" : ""}
				onClick={() => setActiveElement("blog")}
			>
				Blog
			</li>
			<li
				className={activeElement === "contact" ? "selected" : ""}
				onClick={() => setActiveElement("contact")}
			>
				Contact
			</li>
		</ul>
	);
}

export default Navbar;
