export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
  subCategory?: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}