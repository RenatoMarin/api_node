const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');
//construtor
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Conectado...');
})
.catch(err => {
    console.log('Erro:' +err);
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../models/userModel.js')(sequelize, DataTypes);
//true para deletar toda a info
db.sequelize.sync({ force:false })
.then(() => {
    console.log('re-sync done!');
})

module.exports = db
