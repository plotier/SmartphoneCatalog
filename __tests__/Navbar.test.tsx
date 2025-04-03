import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

jest.mock("../components/ui/Icon", () => {
	const MockIcon = ({
		width,
		height,
	}: {
		width: string;
		height: string;
	}) => (
		<svg
			data-testid="icon"
			width={width}
			height={height}
		/>
	);
	MockIcon.displayName = "Icon";
	return MockIcon;
});

jest.mock("../components/cart/CartIconCounter", () => {
	const MockCartIconCounter = () => (
		<div data-testid="cart-icon-counter" />
	);
	MockCartIconCounter.displayName = "CartIconCounter";
	return MockCartIconCounter;
});

describe("Navbar", () => {
	it("should render logo, cart icon, and links", () => {
		render(<Navbar />);

		const logo = screen.getByTestId("icon");
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute("width", "74");
		expect(logo).toHaveAttribute("height", "24");

		const cartIconCounter = screen.getByTestId(
			"cart-icon-counter"
		);
		expect(cartIconCounter).toBeInTheDocument();

		const homeLink = screen.getByRole("link", {
			name: /home/i,
		});
		expect(homeLink).toBeInTheDocument();

		const cartLink = screen.getByRole("link", {
			name: /cart/i,
		});
		expect(cartLink).toBeInTheDocument();
	});
});
