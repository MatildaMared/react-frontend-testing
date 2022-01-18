import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

describe("Cart component", () => {
	it("renders properly", () => {
		render(<Cart />);
	});

	it("displays the text '0 kr' initially", () => {
		render(<Cart />);
		const price = screen.getByText(/Din kundvagn: 0 kr/i);
		expect(price).toBeInTheDocument();
	});

	it("displays the price of the product when the button is clicked", () => {
		render(<Cart />);

		const button = screen.getByRole("button");
		userEvent.click(button);

		const price = screen.getByText(/Din kundvagn: 100 kr/i);
		expect(price).toBeInTheDocument();
	});

	it("displays the price of the product times 2 when button is clicked twice", () => {
		render(<Cart />);

		const button = screen.getByRole("button");
		userEvent.click(button);
		userEvent.click(button);

		const price = screen.getByText(/Din kundvagn: 200 kr/i);
		expect(price).toBeInTheDocument();
	});

	it("adds a quantity discount of 25% when button is clicked three times", () => {
		render(<Cart />);

		const button = screen.getByRole("button");
		userEvent.click(button);
		userEvent.click(button);
		userEvent.click(button);

		const price = screen.getByText(/Din kundvagn: 225 kr/i);
		expect(price).toBeInTheDocument();
	});
});
