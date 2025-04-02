import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import styles from "./totalPrice.module.css";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const TotalPrice = () => {
	const { state } = useGlobalContext();
	return (
		<div className={styles.totalAndPayContainer}>
			<span>TOTAL </span>
			<span>{calculateTotalPrice(state.cart)} EUR</span>
		</div>
	);
};

export default TotalPrice;
