export interface ProductInterface {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    ingredients: {
        name: string;
        icon: string;
        _id: string;
    }[];
}
