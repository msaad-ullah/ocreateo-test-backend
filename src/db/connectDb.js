const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect('mongodb+srv://msaadullah04:ocreateotest123@cluster0.nbmsjct.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectDB;