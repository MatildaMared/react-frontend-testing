import "./App.css";
import Calculator from "./components/Calculator";
import DropdownMenu from "./components/DropdownMenu";
// import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<DropdownMenu />
			{/* <Navbar items={["Home", "About", "Blog", "Contact"]} /> */}
			<h1>Hello!</h1>
			<p>This is a React app with TypeScript.</p>
			{/* <Counter /> */}
			<Calculator />
		</div>
	);
}

export default App;
