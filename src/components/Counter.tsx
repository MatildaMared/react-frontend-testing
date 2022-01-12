import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(1);

	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Value: {count}
			</button>
		</div>
	);
}

export default Counter;
