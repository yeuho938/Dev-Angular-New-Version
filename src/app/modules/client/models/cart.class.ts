export class Cart {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
    totalPrice: number;
    public constructor(init?: Partial<Cart>) {
        Object.assign(this, init);
    }
}
