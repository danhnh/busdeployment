const express = require('express');
var cors = require('cors');
const app = express();
const fetch = require('node-fetch');

const url = 'https://trienkhaikinhdoanh-acb.azurewebsites.net';

app.use(cors());
app.use(express.static('build'));

app.post('/oauth2/token', (request, res, next) => {
    fetch(`https://www.yammer.com/oauth2/access_token.json?client_id=0JqrtQdnp8sRHVr2pxx0dA&client_secret=4zW1Oyui6LIpNHugFdkSRbNPZKiBMA8DQEXyoaPWX4&code=${request.query.code}`,{
        method: 'POST',
        headers: {
            'origin': url,
            'referer': `${url}?code=${request.query.code}`,
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        let yammerAcc = responseJson;
        res.status(200).json(responseJson);
    })
    .catch((error) => {
        res.status(400).json("Invalid");
    });
});
app.listen(process.env.PORT||5000);
console.log('app running on '+(process.env.PORT||5000));
