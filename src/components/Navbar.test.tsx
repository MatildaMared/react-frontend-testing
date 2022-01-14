import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

const setViewMock: jest.Mock = jest.fn();

describe("Navbar component", () => {
	const items = ["Home", "About", "Blog", "Contact"];
	it("renders without crashing", () => {
		render(<Navbar items={items} setView={setViewMock} />);
	});

	it("sets css class 'selected' on the menu item that is clicked", () => {
		render(<Navbar items={items} setView={setViewMock} />);

		const homeElement = screen.getByText(/home/i);
		const aboutElement = screen.getByText(/about/i);
		const blogElement = screen.getByText(/blog/i);
		const contactElement = screen.getByText(/contact/i);

		expect(homeElement).toHaveClass("selected");

		userEvent.click(aboutElement);
		expect(aboutElement).toHaveClass("selected");
		expect(setViewMock.mock.calls[0][0]).toBe(items.indexOf(items[1]));

		userEvent.click(blogElement);
		expect(blogElement).toHaveClass("selected");
		expect(setViewMock.mock.calls[1][0]).toBe(items.indexOf(items[2]));

		userEvent.click(contactElement);
		expect(contactElement).toHaveClass("selected");
		expect(setViewMock.mock.calls[2][0]).toBe(items.indexOf(items[3]));
	});
});
