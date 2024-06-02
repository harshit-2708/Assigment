const mysql = require('../lib/mysql');

const createNews = async (title, description, matchId, tourId) => {
    const statement = 'INSERT INTO news (title, description, matchId, tourId) VALUES (?, ?, ?, ?)';
    const parameters = [title, description, matchId, tourId];
    try {
        return await mysql.query(statement, parameters);
    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.code === 'ER_ROW_IS_REFERENCED_2') {
            console.error('Foreign key constraint error:', error.message);
            throw new Error('No Tour found for the news.');
        } else {
            console.error("Error Creating news:", error);
            throw error;
        }
    }
}

const findBySportId = async (sportId) => {
    const statement = 'Select title, description from news inner join tours on tours.id=news.tourId where tours.sportId=?';
    const parameters = [sportId];
    try {
        return await mysql.query(statement, parameters);
    } catch (error) {
        console.error("Error finding news:", error);
        throw error;
    }
}

const findByTourId = async (tourId) => {
    const statement = 'Select title, description from news where news.tourId=?';
    const parameters = [tourId];
    try {
        return await mysql.query(statement, parameters);
    } catch (error) {
        console.error("Error finding news:", error);
        throw error;
    }
}

const findByMatchId = async (matchId) => {
    const statement = 'Select title, description from news where news.matchId=?';
    const parameters = [matchId];
    try {
        return await mysql.query(statement, parameters);
    } catch (error) {
        console.error("Error finding news:", error);
        throw error;
    }
}

module.exports = {
    findByMatchId: findByMatchId,
    findByTourId: findByTourId,
    findBySportId: findBySportId,
    createNews: createNews
};
