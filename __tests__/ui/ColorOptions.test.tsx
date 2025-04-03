import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import ColorOptions from "../../components/ui/ColorOptions";
import { ColorOptionType } from "@/types/productDetails";

const mockOptions: ColorOptionType[] = [
	{ name: "Red", hexCode: "#FF0000", imageUrl: "" },
	{ name: "Green", hexCode: "#00FF00", imageUrl: "" },
	{ name: "Blue", hexCode: "#0000FF", imageUrl: "" },
];

describe("ColorOptions Component", () => {
	it("triggers onChange when a color is clicked", () => {
		const mockOnChange = jest.fn();

		render(
			<ColorOptions
				options={mockOptions}
				selectedColor="Red"
				onChange={mockOnChange}
			/>
		);

		const greenSwatch = screen.getByTestId("Green");
		fireEvent.click(greenSwatch);

		expect(mockOnChange).toHaveBeenCalledWith(
			mockOptions[1]
		);
	});
});
