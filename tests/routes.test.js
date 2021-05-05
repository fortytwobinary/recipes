const app = require("../server");
const supertest = require("supertest");

describe('Resource, Get All Endpoints', () => {
    it('Gets all the categories', async done => {
        const res = await supertest(app).get('/v1/recipes/categories')
        expect(res.status).toBe(200)
        done()
    });

    it('Gets all the directions', async done => {
        const res = await supertest(app).get('/v1/recipes/directions')
        expect(res.status).toBe(200)
        done()
    });

    it('Gets all the ingredients', async done => {
        const res = await supertest(app).get('/v1/recipes/ingredients')
        expect(res.status).toBe(200)
        done()
    });
});
