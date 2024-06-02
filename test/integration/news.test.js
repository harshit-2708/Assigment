const assert = require('chai').assert;
const request = require('supertest');
const { app } = require('../../index');

describe('News API tests', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(done);
        console.log(server.address);
    });

    afterAll((done) => {
        server.close(done);
    });

    describe('POST /news/create', function () {
        it('should create news successfully', async function () {
            const response = await request(server)
                .post('/news/create')
                .send({ title: 'Test News', description: 'Description', matchId: 1 });
            assert.equal(response.status, 202);
            assert.equal(response.text, 'News successfully created');
        });
    });

    describe('GET /news/match/:id', function () {
        it('should return news related to a match', async function () {
            const response = await request(server)
                .get('/news/match/1');
            assert.equal(response.status, 200); 
            assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description' }]);
        });
    });

    describe('GET /news/tour/:id', function () {
        it('should return news related to a tour', async function () {
            const response = await request(server)
                .get('/news/tour/1');
            assert.equal(response.status, 200); 
            assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description' }]);
        });
    });

    describe('GET /news/sport/:id', function () {
        it('should return news related to a sport', async function () {
            const response = await request(server)
                .get('/news/sport/1');
            assert.equal(response.status, 200); 
            assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description' }]);
        });
    });
});

