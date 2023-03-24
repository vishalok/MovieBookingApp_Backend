const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Movie = require('./models/movies.models');
const Theatre = require('./models/theatre.model');
const { PORT } = require('./configs/server.config');
const { DB_URL } = require('./configs/db.config');

//Using the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//IIFE
(async ()=> {
    try{    
        await mongoose.connect(DB_URL);
        console.log('db connected');
        await init();
    }
    catch(err){
        console.error('error getting while connecting mongoDB', err);
    }

})();

async function init(){
    try{
        await Movie.collection.drop();
    await Movie.create({
        name: "Bachhan Pandey",
        description: "Comedy Masala Movie",
        casts: ["Akshay Kumar", "Jacqueline Fernandiz"],
        director: "Farhad Samji",
        trailerUrl: "http://bacchanpandey/trailers/1",
        posterUrl: "http://bacchanpandey/posters/1",
        language: "Hindi",
        releaseDate: "18-03-2022",
        releaseSatus: "RELEASED"
    });
    await Movie.create({
        name: "Jalsa",
        description: "Intense Drama Movie",
        casts: ["Vidya Balan", "Shefali Shah"],
        director: "Suresh Triveni",
        trailerUrl: "http://jalsa/trailers/1",
        posterUrl: "http://jalsa/posters/1",
        language: "Hindi",
        releaseDate: "18-03-2022",
        releaseSatus: "RELEASED"
    });
    await Movie.create({
        name: "Jhund",
        description: "Comedy Drama Movie",
        casts: ["Amitabh Bachchan", "Abhinay Raj"],
        director: "Nagraj Manjule",
        trailerUrl: "http://jhund/trailers/1",
        posterUrl: "http://jhund/posters/1",
        language: "Hindi",
        releaseDate: "04-03-2022",
        releaseSatus: "RELEASED"
    });
    await Movie.create({
        name: "Radhe Shyam",
        description: "Comedy Drama Movie",
        casts: ["Prabhas", "Pooja Hegde"],
        director: "Radha Krishna Kumar",
        trailerUrl: "http://RadheShyam/trailers/1",
        posterUrl: "http://RadheShyam/posters/1",
        language: "Hindi",
        releaseDate: "11-03-2022",
        releaseSatus: "RELEASED"
    });
    await Movie.create({
        name: "The Kashmir Files",
        description: "Intense Movie",
        casts: ["Mithun Chakraborty", "Anupam Kher"],
        director: "Vivek Agnihotri",
        trailerUrl: "http://TheKashmirFiles/trailers/1",
        posterUrl: "http://TheKashmirFiles/posters/1",
        language: "Hindi",
        releaseDate: "11-03-2022",
        releaseSatus: "RELEASED"
    });
    console.log("Movies inserted in the db");

    await Theatre.collection.drop();
    await Theatre.create({
        name : "FunCinemas" ,
        city : "Bangalore",
        description : "Top class theatre" ,
        pinCode : 560052 
    });
    await Theatre.create({
        name : "PVR Cinemas - Kormangala" ,
        city : "Bangalore",
        description : "PVR franchise theatre" ,
        pinCode : 560095 

    });
    await Theatre.create({
        name : "IMax" ,
        city : "Bangalore",
        description : "IMax franchise theatre" ,
        pinCode : 560095 

    });
    await Theatre.create({
        name : "Vaibhav Theatre" ,
        city : "Bangalore",
        description : "Economical theatre" ,
        pinCode : 560094

    });

    await Theatre.create({
        name : "Inox" ,
        city : "Pune",
        description : "Top class theatre" ,
        pinCode : 411001 

    });
    await Theatre.create({
        name : "Sonmarg Theatre" ,
        city : "Pune",
        description : "Economical theatre" ,
        pinCode : 411042 

    });

    console.log("Theatres created");
}
catch(err){
    console.log('error while inserting default entries in DB', err);
}
}


// call the routes
require('./routes/movie.routes')(app);
require('./routes/theatre.routes')(app);

app.listen(PORT, ()=> {
    console.log(`server is running on port: ${PORT}, please access it on http://localhost:${PORT}`)
})