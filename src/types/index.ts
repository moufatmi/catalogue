export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}

export type Category = 'Food' | 'Accessories' | 'Clothing' | 'Electronics' | 'Beauty';

export interface CartItem {
  product: Product;
  quantity: number;
}