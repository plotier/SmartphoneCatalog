interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface ProductDetails {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  colorOptions: ColorOption[];
}

export interface ColorOptionType {
  name: string;
  hexCode?: string;
  imageUrl: string;
}

export interface StorageOptions {
  capacity: string;
  price: number;
}