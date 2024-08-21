import { CartItem } from "./cartItem";

export interface SaleInterface {
    _id: string,
    date: Date,
    itensSale: CartItem[],
    total: number,
    provider: string,
    code: string,
    status: boolean,
    photo: string
}
