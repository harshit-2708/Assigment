// newsController.js
const News = require('../controllers/news');
const express = require('express');

module.exports = function (app) {
    app.use(express.json());
    app.route('/news/create').post(async (req, res) => {
        try {
            const newsRequest = req.body;
            const response = await News.createNews(newsRequest);
            res.status(202).send(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.route('/news/match/:id').get(async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const news = await News.getMatchNews(id);
            res.status(202).json(news);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.route('/news/tour/:id').get(async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const news = await News.getTourNews(id);
            res.status(202).json(news);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

    app.route('/news/sport/:id').get(async (req, res) => {
        try {
            const id = parseInt(req.params.id, 10);
            const news = await News.getSportNews(id);
            res.status(202).json(news);
        } catch (error) {
            res.status(500).send(error.message);
        }
    });
}

