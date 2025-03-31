"use client";

import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "@/types/ui";

const Button: React.FC<ButtonProps> = ({
	deactivated = false,
	children,
    onClick
}) => {
	return (
		<div
			onClick={onClick}
			className={`${styles.button} ${
				deactivated ? styles.deactivated : ""
			}`}
		>
			{children}
		</div>
	);
};

export default Button;
