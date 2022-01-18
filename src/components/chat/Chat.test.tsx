import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat from "./Chat";

describe("Chat component", () => {
	it("renders properly", () => {
		render(<Chat />);
	});

	it("does not show an input field intially", () => {
		render(<Chat />);
		const input = screen.queryByPlaceholderText(/Write something../i);
		expect(input).toBeNull();
	});

	it("shows an input field after clicking the button", () => {
		render(<Chat />);
		const button = screen.getByRole("button");
		userEvent.click(button);

		const input = screen.queryByPlaceholderText(/Write something.../i);
		expect(input).toBeInTheDocument();
	});

	it("hides the input field after clicking the button again", () => {
		render(<Chat />);

		const button = screen.getByRole("button");
		userEvent.click(button);
		userEvent.click(button);

		const input = screen.queryByPlaceholderText(/Write something.../i);
		expect(input).toBeNull();
	});

	it("empties the input field when the user has pressed enter after writing something", () => {
		render(<Chat />);

		const button = screen.getByRole("button");
		userEvent.click(button);

		const inputField = screen.queryByPlaceholderText(/Write something.../i);
		userEvent.type(inputField as HTMLElement, "Testmessage");
		userEvent.keyboard("{Enter}");

		expect(inputField).toHaveValue("");

		const writtenText = screen.getByText("Testmessage");
		expect(writtenText).toBeInTheDocument();
	});
});
