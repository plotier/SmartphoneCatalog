'use client'
import { getProducts } from "@/lib/service";
import { useQuery } from "@tanstack/react-query";
import { Product } from '../../types/product';
import ProductCard from "../ProductCard";
import styles from "./productsList.module.css";
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect } from "react";

const ProductsList = () => {
  const { state, dispatch } = useGlobalContext();
  const debouncedSearch = useDebounce(state.search, 1500);

  const { data, isFetching } = useQuery({

    queryKey: ["products", debouncedSearch],
    queryFn: () => getProducts({ search: debouncedSearch, limit: 20 })
  })

  useEffect(() => {
    if (data)
      dispatch({ type: "SET_RESULTS_LENGTH", payload: data.length });
  }, [data, dispatch])


  if (isFetching) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      {data?.map((product: Product, index: number) => (
        <ProductCard key={product.id + index} product={product} />
      ))}
    </div>
  )
}

export default ProductsList