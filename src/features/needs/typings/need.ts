export type Need = {
  category: string;
  quantity: number;
  weight: number;
  quantityReceived: number;
  quantityPending: number;
};

export type NeedDBItem = { id: string; userId: string } & Need;
