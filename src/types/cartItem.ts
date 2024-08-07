import { ProductInterface } from "./Product";

export interface CartItem {
    product: ProductInterface;
    quantity: number;
}
