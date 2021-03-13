require('dotenv').config();
const mongoose = require('mongoose');


const connectionString = process.env.MONGO_URL || "mongodb://localhost:27017/farmony";
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log('MongoDB connection error:', err));

module.exports = {
    User: require('./user'),
    Post: require('./post'),
    Garden: require('./garden'),
    Holistic: require('./holistic'),
    Trade: require('./trade'),
    Buy: require('./buy'),
    Volunteer: require('./volunteer')
};