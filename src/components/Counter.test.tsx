import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./Counter";

it("renders counter button", () => {
	render(<App />);
});

it("increases the value on the button when clicked", () => {
	render(<App />);
	let buttonElement = screen.getByText("Value: 1");
	expect(buttonElement).toBeInTheDocument();

	userEvent.click(buttonElement);

	buttonElement = screen.getByText("Value: 2");
	expect(buttonElement).toBeInTheDocument();

	userEvent.click(buttonElement);

	buttonElement = screen.getByText("Value: 3");
	expect(buttonElement).toBeInTheDocument();
});

// it("decreases the value when decrease button is clicked"() => {
//   render(<App />);

//   let buttonElement = screen.getByText("Value: 1");
// })