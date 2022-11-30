const express = require('express');
const fetch = require('node-fetch');
const app= express();
const port =8080;




//use css files and js files in a direcory named public
app.use(express.static('public'));


app.get('/fixtures', async ( request ,response) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7b527829bmshe23af20551da78cp1c3e10jsn679ad84fe2f2',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };
    
    const fetchApi = await fetch('https://api-football-beta.p.rapidapi.com/fixtures?season=2022&league=1', options);
    
    const fixtureResponse = await fetchApi.json();

    console.log(fixtureResponse);

    response.json(fixtureResponse.response);
});



app.listen(port,() => {
    console.log(`Example app listening at localhost and port :${port} `)
});


