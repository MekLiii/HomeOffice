// const {Sequelize,DataTypes} = require('sequelize');
import {Sequelize} from 'sequelize';
import UserModel from './userModel';


const sequelize = new Sequelize('HomeOffice', 'postgres', 'kamil123', 
{
    dialect:'postgres',
    port:4000,
}
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.log(`Unable to connect to the database: ${err}`);
})

type TDB = {
    Sequelize?: typeof Sequelize,
    users: any,
    sequelize: typeof sequelize,
}

const db:TDB = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    users: UserModel(sequelize),
};
export default db;