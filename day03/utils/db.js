const mongodb = require('mongodb');
const apiReulst = require('./apiResult')
const mc = mongodb.MongoClient;

var db = null;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('gz1801');
})

module.exports = {
    async select(_collection, _condition = {}){
        try{
            let items =  await db.collection(_collection).find(_condition).toArray();
            let result = apiReulst(true, items);
            return result;
        } catch(error){
            return apiReulst(false, error);
        }
    },
    insert(){},
    update(){},
    delete(){}
}