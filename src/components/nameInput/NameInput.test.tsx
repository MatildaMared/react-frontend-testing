import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NameInput from "./NameInput";

describe("NameInput component", () => {
	it("renders properly", () => {
		render(<NameInput />);
	});

	it("displays an input field that is empty and with no css classes", () => {
		render(<NameInput />);

		const input = screen.queryByPlaceholderText(/Ditt Namn/i);

		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("");
		expect(input).not.toHaveClass("valid");
		expect(input).not.toHaveClass("invalid");
	});

	it("adds css class valid to input field if name is valid (only strings and spaces)", () => {
		render(<NameInput />);

		const input = screen.queryByPlaceholderText(/Ditt Namn/i);

		userEvent.type(input as HTMLElement, "Test");
		expect(input).toHaveClass("valid");

		userEvent.type(input as HTMLElement, "Matilda Mared");
		expect(input).toHaveClass("valid");
	});

	it("adds css class invalid to input field if name is invalid", () => {
		render(<NameInput />);

		const input = screen.queryByPlaceholderText(/Ditt Namn/i);

		userEvent.type(input as HTMLElement, "Matilda123");
		expect(input).toHaveClass("invalid");
	});

	it("shows the message 'Var vänlig skriv ditt namn' if input field is empty", () => {
		render(<NameInput />);

		const input = screen.queryByPlaceholderText(/Ditt Namn/i);

		expect(input).toHaveValue("");
		expect(screen.getByText(/Var vänlig skriv ditt namn!/i)).toBeInTheDocument();
	});
});
