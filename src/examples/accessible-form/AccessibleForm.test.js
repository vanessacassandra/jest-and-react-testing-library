import React from "react";
import { render, screen } from "@testing-library/react";

import Form from "./AccessibleForm";
import userEvent from "@testing-library/user-event";

describe("<AccessibleForm />", () => {
  test("submitting form will pass username and password input by the user", async () => {
    const onSubmit = jest.fn();

   render(<Form onSubmit={onSubmit} />);

    const username = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);

    const button = screen.getByRole("button", {
      name: /sign in/i,
    });

    expect(username).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.type(username, "Vanessa");
    userEvent.click(button);
    expect(onSubmit).toBeCalledWith({ username: "Vanessa", password: "" });

  });
});
