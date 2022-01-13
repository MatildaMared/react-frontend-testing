import "./App.css";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function App() {
	return (
    <div className="App">
      <Navbar items={["Home", "About", "Blog", "Contact"]} />
			<h1>Hello!</h1>
			<p>This is a React app with TypeScript.</p>
      {/* <Counter /> */}
      <Calculator />
		</div>
	);
}

export default App;
