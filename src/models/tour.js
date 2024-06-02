const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select matches.* from matches left join tours on matches.tourId = tours.id where tours.name = ? and matches.id>? limit ?';
    const parameters = [params.name, parseInt(params.id,0), parseInt(params.size,10)];
    return await mysql.query(statement, parameters);
}


module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}
