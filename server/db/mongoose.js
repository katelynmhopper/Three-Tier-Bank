const mongoose = require('mongoose'); 

const connectionURL = 'mongodb://127.0.0.1:27017'; 
const databaseName = 'bank-customers';

mongoose.connect('mongodb+srv://katelynmhopper:Adalyn102912@cluster0.yr83pgy.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
});

