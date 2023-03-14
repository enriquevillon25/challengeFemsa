export interface Product {
  id: string;
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  fromAccountId?: number;
  toAccountId?: number;
  amount?: number;
  verification_code?: string;
  reason?: string;
}
