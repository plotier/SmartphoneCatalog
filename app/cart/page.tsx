"use client";
import { CartProduct } from "@/types/product";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import CartItem from "@/components/CartItem";
import styles from "./cart.module.css";
import Button from "@/components/ui/Button";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";

export default function Cart() {
	const { state, dispatch } = useGlobalContext();

	const handleRemove = (id: string) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.cartTitle}>
				CART ({state.cart.length})
			</h2>
			<div className={styles.content}>
				{state.cart.map((product: CartProduct, index) => (
					<CartItem
						key={index + product.name}
						product={product}
						handleRemove={handleRemove}
					/>
				))}
			</div>
			<div className={styles.buttonsContainer}>
				<Link
					href="/"
					passHref
				>
					<Button transparent>CONTINUE SHOPPING</Button>
				</Link>
				<div className={styles.totalAndPayContainer}>
					<span>TOTAL </span>
					<span> {calculateTotalPrice(state.cart)}EUR</span>
					<Button>PAY</Button>
				</div>
			</div>
		</div>
	);
}
