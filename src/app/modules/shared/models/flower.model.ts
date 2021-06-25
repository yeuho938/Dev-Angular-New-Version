export class Flower {
  id: number;
  name: string;
  description?: string;
  image: string;
  newPrice: number;
  oldPrice: number;
  remainingStock: number;
  public constructor(init?: Partial<Flower>) {
    Object.assign(this, init);
  }
}
