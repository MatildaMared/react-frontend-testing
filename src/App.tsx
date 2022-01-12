import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";

function App() {
	return (
		<div className="App">
			<h1>Hello!</h1>
			<p>This is a React app with TypeScript.</p>
      {/* <Counter /> */}
      <Calculator />
		</div>
	);
}

export default App;
