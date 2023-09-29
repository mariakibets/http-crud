const {Client} = require ('pg');
const configs = require('../configs/db.json');
const Thing = require('./Things');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const client = new Client(configs.development);

client.connect();

Thing.client = client;


process.on('beforeExit', () => {
    client.end();
});


module.exports = {
    Thing,
    client
};