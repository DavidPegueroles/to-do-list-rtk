import { screen } from "@testing-library/react";
import DeleteButton from "./DeleteButton";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../setupTests";

describe("Given a DeleteButton component", () => {
  describe("When it's rendered with the text 'Delete'", () => {
    test("Then it should display a button with the text 'Delete'", () => {
      const text = "delete";

      renderWithProviders(<DeleteButton text={text} />);

      const deleteButton = screen.getByRole("button", { name: /delete/i });

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an onclick function and the user clicks at the button", () => {
    test("Then the action should be called", () => {
      const action = jest.fn();

      renderWithProviders(<DeleteButton actionOnClick={action} />);

      const deleteButton = screen.getByRole("button");

      userEvent.click(deleteButton);

      expect(action).toHaveBeenCalled();
    });
  });
});
