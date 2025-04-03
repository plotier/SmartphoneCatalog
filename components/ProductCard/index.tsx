import { Product } from "@/types/product";
import styles from "./productCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { getPaddingClass } from "@/utils/paddingUtils";

const ProductCard = ({ product, isMinSize = false }: { product: Product; isMinSize?: boolean }) => {
	return (
		<Link href={`/product-detail/${product.id}`}>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<Image
						src={product.imageUrl || ""}
						alt={product.name}
						className={`${styles[getPaddingClass(product.brand)]} ${isMinSize ? styles.isMinSize : ""}`}
						fill
						style={{ objectFit: "contain" , }} 
						priority
						sizes="(max-width: 420px) 90vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 377px"
						/>
				</div>
				<div className={styles.cardInfoContainer}>
					<div className={styles.cardNames}>
					<p>{product?.brand?.toLocaleUpperCase() || "Unknown Brand"}</p>
					<p>{product?.name?.toLocaleUpperCase() || "Unknown Product"}</p>
					</div>
					<p>{product.basePrice} EUR</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
