import React from "react";
import Image from "next/image";
import { CartProduct } from "@/types/product";
import styles from "./cartItem.module.css";
import { getPaddingClass } from "@/utils/paddingUtils";

const CartItem = ({
	product,
	handleRemove,
}: {
	product: CartProduct;
	handleRemove: (id: string) => void;
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={product.imageUrl || ""}
					alt={product.name}
					className={styles[getPaddingClass(product.brand)]}
					fill
					style={{ objectFit: "contain" }} 
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
			<div className={styles.infoContainer}>
				<div>
					<p>{product.name}</p>

					<p>
						{product.capacity} | {product.color}
					</p>
					<p className={styles.price}>
						{product.price} EUR
					</p>
				</div>

				<div
					className={styles.deleteButton}
					onClick={() => handleRemove(product.id)}
				>
					Eliminar
				</div>
			</div>
		</div>
	);
};

export default CartItem;
