var express = require('express');
var cors = require('cors');
const axios = require("axios");

var app = express(); // Express JS 

const gatewayURL = 'https://roadtrippers.herokuapp.com/api/v1'; // API host URL configured

app.use(cors()); // CORS is enabled as Cross browser origin integration with different host.
app.use(express.urlencoded({ extended: true }));

app.get('*', function (req, res) { // for all the routes(*) same callback is configured.
  console.log('req', req.params, req.originalUrl, req.url);
  const setup = {
    method:'GET',
    url: `${gatewayURL}${req.url}`, // UI clinet invoked call to UI server with 8080, UI server changing the gateway URL to integrated with backend.
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  axios(setup) // Invoking API call inside API to get the response from backend
  .then(response => { // success callback
      res.header('Access-Control-Allow-Origin','*');
      res.send(JSON.stringify(response.data));
  })
  .catch(error => { // failure callback
    res.send({ status: error.status, isAxiosError: error.isAxiosError, data: []});
  });
});

app.listen(8080, () => { // UI sever is configured in 8080 
  console.log('CORS-enabled UI server, listening on port :: 8080')
});
