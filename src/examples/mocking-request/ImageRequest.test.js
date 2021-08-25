import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ImageRequest from "./ImageRequest";

jest.mock("axios");

describe("fetch data", () => {
  test("show image on success response", async () => {
    const mockData = {
      message: "https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg",
      status: "success",
    };

    axios.get.mockResolvedValue({ data: mockData });

    render(<ImageRequest />);
    await waitFor(() => expect(axios.get).toBeCalledTimes(1));

    const image = screen.getByRole("img", {
      name: /dog/i,
    });
    expect(image).toHaveAttribute("src", mockData.message);
  });

  test("show error message on error response", async () => {
    const mockData = {
      status: "error",
      message: 'No route found for "GET /api/breeds/image/randoma" with code: 0',
      code: 404,
    };
    axios.get.mockRejectedValue({ response: { data: mockData } });

    render(<ImageRequest />);
    await waitFor(() => expect(axios.get).toBeCalledTimes(1));

    const image = screen.queryByRole("img", {
      name: /dog/i,
    });
    expect(image).not.toBeInTheDocument();
    const errorMsg = screen.getByRole("alert");
    expect(errorMsg).toHaveTextContent(mockData.message);
  });
});
