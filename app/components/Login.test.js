import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Login from "./Login";

describe("Login component", () => {
  it("renders Login form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    // Check if the Login form components are rendered
    expect(getByText("Login")).toBeDefined();
    expect(getByPlaceholderText("Email")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
    expect(getByText("Dont have an account? Sign Up")).toBeDefined();
  });

  it("renders Sign Up form correctly", () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    // Switch to Sign Up form
    fireEvent.press(getByText("Dont have an account? Sign Up"));

    // Check if the Sign Up form components are rendered
    expect(getByText("Sign Up")).toBeDefined();
    expect(getByPlaceholderText("name")).toBeDefined();
    expect(getByPlaceholderText("Password")).toBeDefined();
    expect(getByPlaceholderText("email")).toBeDefined();
    expect(getByPlaceholderText("phone")).toBeDefined();
    expect(getByText("Sign up")).toBeDefined();
    expect(getByText("Already have an account? Login")).toBeDefined();
  });

  it("handles Login form submission correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    // Simulate user input
    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "testpassword");

    // Simulate form submission
    fireEvent.press(getByText("Login"));

    // Add assertions or check if the login logic is triggered
    // You might need to mock your login function and check if it's called correctly
  });

  it("handles Sign Up form submission correctly", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    // Switch to Sign Up form
    fireEvent.press(getByText("Dont have an account? Sign Up"));

    // Simulate user input
    fireEvent.changeText(getByPlaceholderText("name"), "John Doe");
    fireEvent.changeText(getByPlaceholderText("Password"), "testpassword");
    fireEvent.changeText(getByPlaceholderText("email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("phone"), "1234567890");

    // Simulate form submission
    fireEvent.press(getByText("Sign up"));

    // Add assertions or check if the signup logic is triggered
    // You might need to mock your signup function and check if it's called correctly
  });
});
