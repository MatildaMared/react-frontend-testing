import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownMenu from "./DropdownMenu";

// Dropdown Menu
describe("Dropdown Menu component", () => {
	it("renders without crashing", () => {
		render(<DropdownMenu />);
	});

	it("has a menu button", () => {
		render(<DropdownMenu />);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	it("does not show the menu items initially", () => {
		render(<DropdownMenu />);

		const items = screen.queryAllByRole("listitem");

		expect(items[0]).toBeUndefined();
	});

	it("shows the menu items when menu button is clicked once", () => {
		render(<DropdownMenu />);

		const button = screen.getByRole("button");
		userEvent.click(button);

		const items = screen.queryAllByRole("listitem");
		expect(items[0]).toBeInTheDocument();
	});

	it("hides the items when menu button is clicked again", () => {
		render(<DropdownMenu />);

		const button = screen.getByRole("button");

		userEvent.click(button);
		userEvent.click(button);

		const items = screen.queryAllByRole("listitem");
		expect(items[0]).toBeUndefined();
	});
});
