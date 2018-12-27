const express = require('express');
const app = express();
const fetch = require('node-fetch');

//For testing
// const clientId = "F3tSSYr2nCqndlGTrbWug";
// const clientSecretId = 'yH444V2JomKHKgfMJ4exicODWVDPPrn38wCnSwjHFY';
// const url = 'http://localhost:5000';

// For production
const clientId = "0JqrtQdnp8sRHVr2pxx0dA";
const clientSecretId = '4zW1Oyui6LIpNHugFdkSRbNPZKiBMA8DQEXyoaPWX4';
const url = 'https://trienkhaikinhdoanh-acb.azurewebsites.net';

app.use(express.static('build'));

app.post('/oauth2/token', (request, res, next) => {
    fetch(`https://www.yammer.com/oauth2/access_token.json?client_id=${clientId}&client_secret=${clientSecretId}&code=${request.query.code}`,{
        method: 'POST',
        headers: {
            'origin': url,
            'referer': `${url}?code=${request.query.code}`,
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        res.status(200).json(responseJson);
    })
    .catch((error) => {
        res.status(400).json("Invalid");
    });
});
app.listen(process.env.PORT || 5000);