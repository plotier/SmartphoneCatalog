"use client";
import { CartProduct } from "@/types/product";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import CartItem from "@/components/CartItem";
import styles from "./cart.module.css";
import Button from "@/components/ui/Button";
import TotalPrice from "@/components/Cart/TotalPrice";

export default function Cart() {
	const { state, dispatch } = useGlobalContext();

	const handleRemove = (id: string) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};

	return (
		<div>
			<h2 className={styles.cartTitle}>
				CART ({state.cart.length})
			</h2>
			<div className={styles.container}>
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
					{state.cart.length > 0 && (
						<div
							className={`${styles.totalMobile} ${styles.totalHidden}`}
						>
							<TotalPrice />
						</div>
					)}
					<div className={styles.mobileBox}>
						<div
							className={
								state.cart.length === 0
									? styles.continueContainerEmpty
									: styles.continueContainer
							}
						>
							<Link
								href="/"
								passHref
							>
								<Button transparent>
									CONTINUE SHOPPING
								</Button>
							</Link>
						</div>

						{state.cart.length > 0 && (
							<div className={styles.totalAndPayContainer}>
								<div
									className={`${styles.totalDesktop} ${styles.totalHidden}`}
								>
									<TotalPrice />
								</div>
								<Button>PAY</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
