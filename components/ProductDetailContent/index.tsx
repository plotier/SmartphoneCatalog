"use client";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/service";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useState, useEffect } from "react";
import StorageButton from "../ui/StorageButton";
import styles from "./productDetailContent.module.css";
import ColorOptions from "../ui/ColorOptions";
import { Product } from "../../types/product";
import Button from "../ui/Button";
import SpecificationRow from "../ui/SpecificationRow";
import ProductCard from "../ProductCard";
import { StorageOptions, ColorOptionType } from "@/types/productDetails";

const ProductDetailContent = ({ id }: { id: string }) => {
	const { dispatch } = useGlobalContext();
	const [selectedColor, setSelectedColor] =
		useState<ColorOptionType>({
			name:'',
			imageUrl:''
		});
	const [selectedCapacity, setSelectedCapacity] =
		useState<StorageOptions>({
			capacity: "",
			price: 0,
		});
	const {
		data: product,
		isFetching,
		error,
	} = useQuery({
		queryKey: ["product", id],
		queryFn: () => getProductById(id),
	});

	const handleAddToCart = () => {
		if (product) {
			dispatch({ type: "ADD_TO_CART", payload: {
				id:crypto.randomUUID(),
				name: product.name,
				price: selectedCapacity.price,
				imageUrl: selectedColor.imageUrl,
				capacity: selectedCapacity.capacity,
				color: selectedColor.name,
			} });
		}
	};

	const handleColor = (color:ColorOptionType) => {
		setSelectedColor(color);
	};

	useEffect(() => {
		if (
			selectedCapacity.capacity !== "" &&
			selectedColor.name === ""
		) {
			setSelectedColor(product?.colorOptions[0])
		}

		if (
			selectedColor.name !== "" &&
			selectedCapacity.capacity === ""
		) {
			setSelectedCapacity({
				...selectedCapacity,
				capacity: product?.storageOptions[0].capacity,
			});
		}
	}, [selectedCapacity, selectedColor, product]);

	if (isFetching) return <div>Loading...</div>;
	if (error) return <div>Error loading product</div>;
	
	const selectedColorOption = product?.colorOptions.find(
		(option: Product) => option.name === selectedColor.name
	);
	return (
		<>
			<Link
				href="/"
				passHref
			>
				<p
					style={{
						display: "flex",
						justifyContent: "space-between",
						paddingLeft: "8px",
					}}
				>{`< BACK `}</p>
			</Link>
			<div className={styles.container}>
				<div className={styles.overviewContainer}>
					<div className={styles.imageContainer}>
						<Image
							src={
								selectedColor.name !== ""
									? selectedColorOption.imageUrl
									: product?.colorOptions[0].imageUrl
							}
							alt={product?.name || ""}
							width={510}
							height={630}
							style={{ width: "100%", height: "100%" }}
							priority
						/>
					</div>
					<div className={styles.infoContainer}>
						<h1>{product?.name}</h1>
						<h2>From {product?.basePrice} EUR</h2>

						<div className={styles.selectors}>
							<p>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</p>
							<div className={styles.storageContainer}>
								{product?.storageOptions.map(
									(option: Product, index: number) => (
										<StorageButton
											key={index}
											label={option.capacity}
											isSelected={
												selectedCapacity.capacity ===
												option.capacity
											}
											onClick={() => {
												setSelectedCapacity(option);
											}}
										/>
									)
								)}
							</div>
							<div className={styles.colorContainer}>
								<p>COLOR. PICK YOUR FAVORITE</p>
								<ColorOptions
									options={product?.colorOptions}
									selectedColor={selectedColor.name}
									onChange={handleColor}
								/>
								<p style={{ height: "15px" }}>
									{selectedColor.name}
								</p>
							</div>
							<Link
								href="/cart"
								passHref
							>
								<Button
									onClick={handleAddToCart}
									deactivated={selectedColor.name === ""}
								>
									AÑADIR
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.specsContainer}>
					<h2>SPECIFICATIONS</h2>
					{Object.entries(product.specs).map(
						([key, value], index) => (
							<SpecificationRow
								key={index}
								label={key
									.replace(/([A-Z])/g, " $1")
									.toUpperCase()}
								data={value}
							/>
						)
					)}
				</div>
				<div className={styles.similarItemsContainer}>
					<h2>SIMILAR ITEMS</h2>
					<div className={styles.carrouselContainer}>
						{product.similarProducts?.map(
							(product: Product, index: number) => (
								<ProductCard
									key={product.id + index}
									product={product}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailContent;
