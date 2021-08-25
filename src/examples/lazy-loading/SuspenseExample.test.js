import { render, screen } from "@testing-library/react";
import SuspenseExample from "./SuspenseExample";

test("renders lazy component", async () => {
  render(<SuspenseExample />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  const dogImage = await screen.findByRole("img", { name: /dog/i });
  expect(dogImage).toBeInTheDocument();
});
