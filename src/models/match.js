const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const findTourIdByMatchId = async(matchId) => {
    const statement = 'select tourId from matches where id=?';
    const parameters = [matchId];
    try{
        return await mysql.query(statement, parameters);
    }catch{
        console.error("Error finding news:", error);
        throw error
    }
}

module.exports = {
    getAllMatches: getAllMatches,
    findTourIdByMatchId:findTourIdByMatchId
}