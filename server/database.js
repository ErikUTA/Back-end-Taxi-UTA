const mongoose = require('mongoose');

//mongodb://username:password@host:port/database
const URI = 'mongodb+srv://Erik:asd123@cluster0.vays8.mongodb.net/taxiUTA?retryWrites=true&w=majority';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
