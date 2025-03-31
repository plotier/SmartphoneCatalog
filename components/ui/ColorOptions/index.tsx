import React from "react";
import styles from "./colorOptions.module.css";
import { ColorOptionType } from "@/types/productDetails";

const ColorOptions = ({
	options,
	selectedColor,
	onChange,
}: {
	options: ColorOptionType[];
	selectedColor: string;
	onChange: (color: ColorOptionType) => void;
}) => {
	return (
		<div className={styles.optionsContainer}>
			{options.map(
				(option: ColorOptionType, index: number) => (
					<div
						key={index}
						className={`${styles.option} ${
							selectedColor === option.name
								? styles.selected
								: ""
						}`}
						onClick={() => onChange(option)}
					>
						<div
							className={styles.swatch}
							style={{ backgroundColor: option.hexCode }}
						></div>
					</div>
				)
			)}
		
		</div>
	);
};

export default ColorOptions;
