"use client";
import { useEffect } from "react";
import { CartProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export default function Cart() {
	const { state, dispatch } = useGlobalContext();

	const handleRemove = (id: string) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};
	//TODO: atomizar en otros componentes
	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<div>
			<h2>CART {state.cart.length}</h2>

			<ul>
				{state.cart.map((product: CartProduct, index) => (
					<li key={product.name + index}>
						<Image
							src={product.imageUrl || ""}
							alt={product.name}
							width={150}
							height={150}
							priority
						/>
						<span>
							{product.capacity} | ${product.color}
						</span>
						<span>{product.price} EUR</span>
						<button
							onClick={() => handleRemove(product.id)}
						>
							Eliminar
						</button>
					</li>
				))}
			</ul>
			<Link
				href="/"
				passHref
			>
				<button>CONTINUE SHOPPING</button>
			</Link>
		</div>
	);
}
