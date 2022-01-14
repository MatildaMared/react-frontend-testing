import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Chat from "./components/chat/Chat";
// import Dinopedia from "./components/dinosaur/Dinopedia";
// import DropdownMenu from "./components/DropdownMenu";
import Navbar from "./components/Navbar";

function App() {
	const [view, setView] = useState(0);

	return (
		<div className="App">
			{/* <DropdownMenu /> */}
			<Navbar items={["Home", "About", "Blog", "Contact"]} setView={setView} />
			<h1>Hello!</h1>
			<p>This is a React app with TypeScript. {view}</p>
			{/* <Counter /> */}
			<Calculator />
			{/* <Dinopedia /> */}
			<Chat />
		</div>
	);
}

export default App;
