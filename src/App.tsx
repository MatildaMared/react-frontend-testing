import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Cart from "./components/cart/Cart";
import Chat from "./components/chat/Chat";
import NameInput from "./components/nameInput/NameInput";
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
			<NameInput />
			<Cart />
			{/* <Dinopedia /> */}
			<Chat />
		</div>
	);
}

export default App;
