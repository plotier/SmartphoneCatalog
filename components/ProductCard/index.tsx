import { Product } from "@/types/product";
import styles from "./productCard.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Link href={`/product-detail/${product.id}`}>
			<div className={styles.card}>
				<div className={styles.imageContainer}>
					<Image
						src={product.imageUrl}
						alt={product.name}
						layout="fill"
						// width={100}
						// height={100}
						objectPosition="center"
						objectFit="contain"
						priority
						// sizes="(max-width: 768px) 100px, (max-width: 1200px) 50px, 33px"
					/>
				</div>
				<div className={styles.cardInfoContainer}>
					<div className={styles.cardNames}>
						<p>{product.brand.toLocaleUpperCase()}</p>
						<p>{product.name.toLocaleUpperCase()}</p>
					</div>
					<p>{product.basePrice} EUR</p>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
