'use strict';
require('@code-fellows/supergoose');
const { update } = require('../lib/models/categories/categories.collection');
const category = require('../lib/models/categories/categories.collection');

let newCat = {
    name: "Clothes",
    display_name: "Clothes",
    description: "Whatever you need from Electronics"
};

describe('Categories tests', () => {
    it('Should add a new category', () => {
        category.create(newCat).then(data => {
            Object.keys(newCat).forEach((key) => {
                expect(data[key]).toEqual(newCat[key]);
            });
        });
    });
    it('Should get a specific categories', async () => {
        const saved = await category.create(newCat);
        category.read(saved._id).then(data => {
            Object.keys(newCat).forEach((key) => {
                expect(data[0][key]).toEqual(newCat[key]);
            });
        });
    });
    it('Should get all categories', async () => {
        const saved = await category.create(newCat);
        category.read().then(data => {
            Object.keys(newCat).forEach((key) => {
                expect(data[0][key]).toEqual(newCat[key]);
            });
        });
    });
    it('Should delete categories', async () => {
        const saved = await category.create(newCat);
        category.delete(saved._id).then(data => {
            Object.keys(newCat).forEach((key) => {
                expect(data[key]).toEqual(newCat[key]);
            });
        });
    });
    it('Should update categories', async () => {
        const saved = await category.create(newCat);
        let updated = {
            name: "Clothes",
            display_name: "clothes",
            description: "Whatever you need from Electronics"
        };
        category.update(saved._id,updated).then(data => {
            Object.keys(newCat).forEach((key) => {
                expect(data[key]).toEqual(newCat[key]);
            });
        });
    });
});