import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
  // Render the component
  render(<UserForm />);
  // Manipulate the component or find an element in it
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button", { name: /submit/i });
  // Assert - make sure the component is doing
  // What it's supposed to do
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("It calls the onAddUser function when the form is submitted", () => {
  // Arrange
  const onAddUser = jest.fn();
  render(<UserForm onAddUser={onAddUser} />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole("button", { name: /submit/i });
  // Act
  user.type(nameInput, "John Doe");
  user.type(emailInput, "johndoe@gmail.com");
  user.click(button);
  // Assert
  expect(onAddUser).toHaveBeenCalledWith({
    name: "John Doe",
    email: "johndoe@gmail.com",
  });
});
