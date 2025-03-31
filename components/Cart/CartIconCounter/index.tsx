"use client";
import Icon from "@/components/ui/Icon";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import styles from "./cartIconCounter.module.css";

const CartIcon = () => {
	const { state } = useGlobalContext();

	return (
		<div className={styles.container}>
			<Icon
				name={
					state.cart.length === 0
						? "inactiveBag"
						: "activeBag"
				}
				width={18}
				height={18}
			/>
			<span>{state.cart.length}</span>
		</div>
	);
};

export default CartIcon;
