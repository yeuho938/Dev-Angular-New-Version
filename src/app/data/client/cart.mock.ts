import * as faker from 'faker';
import {random} from 'lodash';
import {Cart} from '@app/modules/client/models/cart.class';

export function randomCartData(count: number): Cart[] {
    return Array(count).fill({}).map((item: Cart, index) => {
        return new Cart({
            id: index + 1,
            name: faker.name.findName(),
            image: faker.image.nature(),
            price: faker.random.number(),
            description: faker.random.words(20),
            quantity: faker.random.number(6),
            totalPrice: faker.random.number(),
        });
    });
}
