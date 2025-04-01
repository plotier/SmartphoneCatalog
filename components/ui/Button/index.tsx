"use client";

import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "@/types/ui";

const Button: React.FC<ButtonProps> = ({
	deactivated = false,
	transparent = false,
	children,
	onClick,
}) => {
	return (
		<div
			onClick={deactivated ? undefined : onClick}
			className={`${styles.button} ${
				deactivated ? styles.deactivated : ""
			} ${transparent ? styles.transparent : ""}`}
		>
			{children}
		</div>
	);
};

export default Button;
