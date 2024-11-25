export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  token?: string;
}

export interface CartItem extends Product {
  quantity: number;
}