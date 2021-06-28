export class Blog {
    id: number;
    title: string;
    image: string;
    day: number;
    month: string;
    description: string;
    public constructor(init?: Partial<Blog>) {
        Object.assign(this, init);
    }
}
