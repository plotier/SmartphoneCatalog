import React from "react";
import styles from "./specificationRow.module.css";

const SpecificationRow = ({
	label,
	data,
}: {
	label: string;
	data: string;
}) => {
	return (
		<div className={styles.especificacionRow}>
			<span className={styles.label}>{label}</span>
			<span className={styles.data}>{data}</span>
		</div>
	);
};

export default SpecificationRow;
