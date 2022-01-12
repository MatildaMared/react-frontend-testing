import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator";

describe("Calculator component", () => {
	it("renders without crashing", () => {
		render(<Calculator />);
	});

	it("displays the value 1 intially", () => {
		render(<Calculator />);
		const element = screen.getByText(/value: 1/i);
		expect(element).toBeInTheDocument();
	});

	it("displays the value 2 after clicking +1", () => {
		render(<Calculator />);

		const increaseBtn = screen.getByText("+1");
		userEvent.click(increaseBtn);

		const element = screen.getByText(/value: 2/i);
		expect(element).toBeInTheDocument();
	});

	it("displays the value 0 when user clicks on -1", () => {});

	// displays the value 0 when user clicks on clear
});
