import { CartProduct } from "@/types/product";

export const calculateTotalPrice = (cart: CartProduct[]): string => 
    cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);