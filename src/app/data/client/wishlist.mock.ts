import * as faker from 'faker';
import {random} from 'lodash';
import {Wishlist} from '@app/modules/client/models/wishlist.class';

export function randomWishlistData(count: number): Wishlist[] {
    return Array(count).fill({}).map((item: Wishlist, index) => {
        return new Wishlist({
            id: index + 1,
            name: faker.name.findName(),
            image: faker.image.nature(),
            price: faker.random.number(),
            description: faker.random.words(20),
        });
    });
}
