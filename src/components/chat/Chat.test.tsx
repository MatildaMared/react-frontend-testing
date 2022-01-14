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
  })
});
