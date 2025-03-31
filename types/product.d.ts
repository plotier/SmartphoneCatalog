export interface Product {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
  capacity: string;
  colorOptions?: { imageUrl: string }[];
}

export interface CartProduct {
  id:string;
  name: string;
  price: number;
  imageUrl: string;
  capacity: string;
  color: string;
}