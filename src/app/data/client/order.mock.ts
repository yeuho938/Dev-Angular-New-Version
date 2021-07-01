import * as faker from 'faker';
import { random } from 'lodash';
import {Order} from '@app/modules/shared/models';

export function randomOrders(count: number): Order[] {
    return Array(count).fill({}).map((item: Order, index) => {
        return new Order({
            id: index + 1,
            userId: faker.random.number(100),
            userFullname: faker.name.findName(),
            userPhone: faker.phone.phoneNumberFormat(),
            userAddress: faker.address.streetAddress(),
            userEmail: faker.internet.email(),
            cartId: faker.random.number(100),
            flowerId: faker.random.number(100),
            flowerName: faker.random.words(3),
            flowerImage: faker.image.nature(),
            flowerPrice: faker.random.number(),
            flowerDescription: faker.random.words(10),
            flowerQuantity: random(1, 20),
            status: random(1, 4),
            totalPrice: faker.random.number(),
        });
    });
}
export function randomOrderById(param: number): Order {
    return new Order({
        id: param,
        userId: faker.random.number(100),
        userFullname: faker.name.findName(),
        userPhone: faker.phone.phoneNumberFormat(),
        userAddress: faker.address.streetAddress(),
        userEmail: faker.internet.email(),
        cartId: faker.random.number(100),
        flowerId: faker.random.number(100),
        flowerName: faker.random.words(4),
        flowerImage: faker.image.nature(),
        flowerPrice: faker.random.number(),
        flowerDescription: faker.random.words(10),
        flowerQuantity: random(1, 20),
        status: random(1, 4),
        totalPrice: faker.random.number(),
    });
}

