export class Wishlist {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    public constructor(init?: Partial<Wishlist>) {
        Object.assign(this, init);
    }
}
