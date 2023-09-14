const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://hoteldining:nbyS4D4dBP4H6pOc@cluster0.leaolgf.mongodb.net/HotelReservation';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB connection failed');
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;

