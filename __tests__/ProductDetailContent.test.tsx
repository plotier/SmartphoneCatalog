import { render, screen, waitFor } from "@testing-library/react";
import ProductDetailContent from "../components/ProductDetailContent";
import { useQuery } from "@tanstack/react-query";
import { GlobalProvider } from "@/context/GlobalContext";
import "@testing-library/jest-dom";

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("ProductDetailContent", () => {
  it("should handle errors during fetching", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      isFetching: false,
      error: new Error("Error loading product"),
    });


    render(
      <GlobalProvider>
        <ProductDetailContent id="1" />
      </GlobalProvider>
    );

    expect(screen.getByText("Error loading product")).toBeInTheDocument();
  });
});
