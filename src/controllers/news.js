const News = require('../models/news');
const Match = require('../models/match');
const Tour = require('../models/tour');


const createNews = async (newsRequest) => {
    if (newsRequest.matchId && newsRequest.matchId !== 0) {
        await createNewsForMatch(newsRequest);
    } else if (newsRequest.tourId && newsRequest.tourId !== 0) {
        await News.createNews(newsRequest.title, newsRequest.description, null, newsRequest.tourId);
    } else {
        throw new Error("Please specify the news based on?")
    }
    return "News successfully created";
}

const createNewsForMatch = async (newsRequest) => {
    const matchInfo = await Match.findTourIdByMatchId(newsRequest.matchId);
    if (!matchInfo || matchInfo.length === 0) {
        throw new Error("No Match found for the news.");
    }
    const tourId = matchInfo[0].tourId;
    await News.createNews(newsRequest.title, newsRequest.description, newsRequest.matchId, tourId);
}

const getMatchNews = async (id) => {
    return await News.findByMatchId(id);
}

const getSportNews = async (id) => {
    return await News.findBySportId(id);
}

const getTourNews = async (id) => {
    return await News.findByTourId(id);
}


module.exports = {
    createNews:createNews,
    getMatchNews:getMatchNews,
    getTourNews:getTourNews,
    getSportNews:getSportNews
};
