const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name, id, size } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }
    if(!id){
        params.id=0;
    }
    if(!size){
        params.size=10;
    }
    return await Tour.getMatchesByTourName(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}