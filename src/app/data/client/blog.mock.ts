import * as faker from 'faker';
import {random} from 'lodash';
import {Blog} from '@app/modules/client/models/blog.class';

export function randomBlogData(count: number): Blog[] {
    return Array(count).fill({}).map((item: Blog, index) => {
        return new Blog({
            id: index + 1,
            title: faker.random.words(5),
            image: faker.image.nature(),
            day: faker.random.number(30),
            month: faker.date.month(),
            description: faker.random.words(10),
        });
    });
}

export function randomLatestBlogData(count: number): Blog[] {
    return Array(count).fill({}).map((item: Blog, index) => {
        return new Blog({
            id: index + 1,
            title: faker.random.words(5),
            image: faker.image.nature(),
            day: faker.random.number(30),
            month: faker.date.month(),
            description: faker.random.words(10),
        });
    });
}
