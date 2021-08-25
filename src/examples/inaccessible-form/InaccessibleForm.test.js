import React from "react";
import { render, screen } from "@testing-library/react";

import Form from "./InaccessibleForm";
import userEvent from "@testing-library/user-event";

/**
 * The test case below tests the functionality and the test will pass, 
 * even though actually there are many accessibility problems in the component.
 */
describe("<InaccessibleForm />", () => {
  test("submitting form will pass username and password input by the user", async () => {
    const onSubmit = jest.fn();

    render(<Form onSubmit={onSubmit} />);

    const username = screen.getByTestId("username");
    const passwordField = screen.getByTestId("password");
    const button = screen.getByTestId("signInButton");

    expect(username).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(username, "Vanessa");
    userEvent.click(button);
    expect(onSubmit).toBeCalledWith({ username: "Vanessa", password: "" });
  });
});
