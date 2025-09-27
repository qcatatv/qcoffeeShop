export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  badge?: string;
  icon: JSX.Element;
}

export type ProductList = Product[];