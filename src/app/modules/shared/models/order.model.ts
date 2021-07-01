import {StatusOrder} from '@app/modules/client/shared/enums';

export class Order {
  id: number;
  userId: number;
  userFullname: string;
  userPhone: number;
  userAddress: string;
  userEmail: string;
  cartId: number;
  flowerId: number;
  flowerName: string;
  flowerImage: string;
  flowerPrice: string;
  flowerDescription: string;
  flowerQuantity: number;
  status: StatusOrder;
  totalPrice: number;
  public constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}
