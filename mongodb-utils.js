const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://786aijazusmaan:Saniaz.12@cluster0.o7qx8z5.mongodb.net/main', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const homeSchema = new mongoose.Schema({
    modelNumber: String,
    dateAndTime: String,
    ipAddress: String,
}, {
    collection: 'home',
});

const detailsSchema = new mongoose.Schema({
    modelNumber: String,
    dateAndTime: String,
    ipAddress: String,
    animeID: String,
}, {
    collection: 'details',
});

const playerSchema = new mongoose.Schema({
    modelNumber: String,
    dateAndTime: String,
    ipAddress: String,
    videoID: String,
}, {
    collection: 'player',
});

const HomeModel = mongoose.model('home', homeSchema);
const DetailsModel = mongoose.model('details', detailsSchema);
const PlayerModel = mongoose.model('player', playerSchema);

module.exports = {
    HomeModel,
    DetailsModel,
    PlayerModel,
};
