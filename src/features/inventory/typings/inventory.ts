export type Inventory = {
  name: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
  price: number;
  weight: number;
  expirationDate: string;
};

export type InventoryDBItem = { id: string; userId: string } & Inventory;
