import { render } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";

// Dropdown Menu
describe("Dropdown Menu component", () => {
	it("renders without crashing", () => {
		render(<DropdownMenu />);
	});
	// menu button exists
	// menu items does not show initially
	// menu items show when menu button is clicked once
	// menu items hide when menu button is clicked again
});
