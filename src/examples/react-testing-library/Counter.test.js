/**
 * Showing the same test cases with and without using React Testing Library
 */

import ReactDOM from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
import { act } from "react-dom/test-utils";

beforeEach(() => {
  document.body.innerHTML = "";
});

describe("Without React Testing Library", () => {
  test("counter increments and decrements when the buttons are clicked without RTL", () => {
    const div = document.createElement("div");
    document.body.append(div);

    act(() => {
      ReactDOM.render(<Counter />, div);
    });

    const [decrement, increment] = div.querySelectorAll("button");
    const message = div.firstChild.querySelector("div");

    expect(message.textContent).toBe("Current count: 0");

    const incrementClickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      button: 0,
    });

    act(() => {
      increment.dispatchEvent(incrementClickEvent);
    });

    expect(message.textContent).toBe("Current count: 1");

    const decrementClickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      button: 0,
    });
    act(() => {
      decrement.dispatchEvent(decrementClickEvent);
    });

    expect(message.textContent).toBe("Current count: 0");
  });
});

describe("With React Testing Library", () => {
  test("counter increments and decrements when the buttons are clicked with RTL", () => {
    const { container } = render(<Counter />);
    const [decrement, increment] = container.querySelectorAll("button");
    const message = container.firstChild.querySelector("div");

    expect(message.textContent).toBe("Current count: 0");
    fireEvent.click(increment);
    expect(message.textContent).toBe("Current count: 1");
    fireEvent.click(decrement);
    expect(message.textContent).toBe("Current count: 0");
  });

  test("counter increments and decrements when the buttons are clicked with RTL 2", () => {
    render(<Counter />);

    const increment = screen.getByRole("button", { name: /increment/i });
    const decrement = screen.getByRole("button", { name: /decrement/i });
    const message = screen.getByText("Current count: 0");
    expect(message).toBeInTheDocument();
    fireEvent.click(increment);
    expect(message.textContent).toBe("Current count: 1");
    fireEvent.click(decrement);
    expect(message.textContent).toBe("Current count: 0");
  });
});
