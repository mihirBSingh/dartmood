const https = require('https');

const API_KEY = '2be3239ad0f34fac8fe3852682e2118f'; // Replace with your MBTA API key
const BASE_URL = 'api-v3.mbta.com';

function getRoutes() {
    const options = {
        hostname: BASE_URL,
        path: `/routes?api_key=${API_KEY}`,
        method: 'GET',
    };

    const req = https.request(options, (res) => {
        let data = '';

        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);
                console.log(jsonData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        });
    });

    req.on('error', (error) => {
        console.error('Error with request:', error);
    });

    req.end();
}

getRoutes();
