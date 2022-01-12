import React, { useState } from "react";

const Calculator = () => {
	const [count, setCount] = useState(1);

	return (
		<>
			<header>
				<h1>Calculator</h1>
			</header>
			<main>
				<button>Clear</button>
				<button>-1</button>
				<button onClick={() => setCount(count + 1)}>+1</button>
				<p className="result">
					<code>Value: {count}</code>
				</p>
			</main>
		</>
	);
};

export default Calculator;
