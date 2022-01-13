import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
	it("renders 'hello'", () => {
		render(<App />);
		const headingElement = screen.getByText("Hello!");
		expect(headingElement).toBeInTheDocument();
	});
});
