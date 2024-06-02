const assert = require('chai').assert;
const request = require('supertest');
const express = require('express');
const app = express();


describe('POST /news/create', function () {
    it('should create news successfully', async function () {
        const response = await request(app)
            .post('/news/create')
            .send({ title: 'Test News', description: 'Description', matchId:1});
        assert.equal(response.status, 202);
        assert.equal(response.text, 'News successfully created');
    });
});

describe('GET /news/match/:id', function () {
    it('should return news related to a match', async function () {
        const response = await request(app)
            .get('/news/match/1');
        assert.equal(response.status, 202);
        assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description'}]);
    });
});

describe('GET /news/tour/:id', function () {
    it('should return news related to a tour', async function () {
        const response = await request(app)
            .get('/news/tour/1');
        assert.equal(response.status, 202);
        assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description' }]);
    });
});

describe('GET /news/sport/:id', function () {
    it('should return news related to a sport', async function () {
        const response = await request(app)
            .get('/news/sport/1');
        assert.equal(response.status, 202);
        assert.deepEqual(response.body, [{ title: 'Test News', description: 'Description' }]);
    });
});
