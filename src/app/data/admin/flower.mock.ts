import * as faker from 'faker';
import { random } from 'lodash';
import {Flower} from '@app/modules/shared/models';

export function randomFlowers(count: number): Flower[] {
    return Array(count).fill({}).map((item: Flower, index) => {
        return new Flower({
            id: index + 1,
            name: faker.name.findName(),
            description: faker.random.words(10),
            image: faker.image.nature(),
            newPrice: faker.random.number(),
            oldPrice: faker.random.number(),
            remainingStock: faker.random.number(100),
        });
    });
}
export function randomSixFlowers(count: number): Flower[] {
    return Array(count).fill({}).map((item: Flower, index) => {
        return new Flower({
            id: index + 1,
            name: faker.name.findName(),
            description: faker.random.words(10),
            image: faker.image.nature(),
            newPrice: faker.random.number(),
            oldPrice: faker.random.number(),
            remainingStock: faker.random.number(100),
        });
    });
}
export function randomEightFlowers(count: number): Flower[] {
    return Array(count).fill({}).map((flower: Flower, index) => {
        return new Flower({
            id: index + 1,
            name: faker.name.findName(),
            description: faker.random.words(6),
            image: faker.image.nature(),
            newPrice: faker.random.number(),
            oldPrice: faker.random.number(),
            remainingStock: faker.random.number(100),
        });
    });
}

export function randomFlowerById(param: number): Flower {
    return new Flower({
        id: param,
        name: faker.name.findName(),
        description: faker.random.words(20),
        image: faker.image.nature(),
        newPrice: faker.random.number(),
        oldPrice: faker.random.number(),
        remainingStock: faker.random.number(100),
    });
}


