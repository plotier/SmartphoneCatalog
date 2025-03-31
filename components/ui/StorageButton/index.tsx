"use client";

import styles from "./storageButton.module.css";

const CustomButton = ({
	label = "Button",
	isSelected = false,
	onClick,
}: {
	label?: string;
	isSelected: boolean;
	onClick?: () => void;
}) => {
	return (
		<div
			className={
				isSelected
					? styles["selected-button"]
					: styles.button
			}
			onClick={onClick}
		>
			{label}
		</div>
	);
};

export default CustomButton;
