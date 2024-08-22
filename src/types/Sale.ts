import { CartItem } from "./cartItem";

export interface SaleInterface {
    _id: string,
    date: Date,
    itensSale: [{
        _id: string,
        name: string,
        icon: string,
        price: number
    }],
    total: number,
    provider: string,
    code: string,
    status: boolean,
    photo: string,
    table: string
}
