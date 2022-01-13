import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar component", () => {
	it("renders without crashing", () => {
		render(<Navbar />);
	});

	// it("sets css class 'selected' on the menu item that is clicked", () => {
	// 	render(<Navbar items={["Home", "About", "Blog", "Contact"]} />);

	// 	const homeElement = screen.getByText(/home/i);
	// 	const aboutElement = screen.getByText(/about us/i);
	// 	const portfolioElement = screen.getByText(/portfolio/i);
	// 	const blogElement = screen.getByText(/blog/i);
	// 	const contactElement = screen.getByText(/contact/i);

	// 	expect(homeElement).toHaveClass("selected");

	// 	userEvent.click(aboutElement);
	// 	expect(aboutElement).toHaveClass("selected");

	// 	userEvent.click(portfolioElement);
	// 	expect(portfolioElement).toHaveClass("selected");

	// 	userEvent.click(blogElement);
	// 	expect(blogElement).toHaveClass("selected");

	// 	userEvent.click(contactElement);
	// 	expect(contactElement).toHaveClass("selected");
	// });
});
