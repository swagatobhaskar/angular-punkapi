// function requireHTTPS(req, res, next) {
//     // the 'x-forwarded-proto' check is for heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https'){
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

const express = require('express');
const app = express();
const path = require("path");
// app.use(requireHTTPS);

// serve our static files
app.use(express.static('./dist/beer-store'));

// Wait for a request to any path and redirect all of the requests to 
app.get('*', function(req, res) {
    // res.sendFile('index.html', {root: 'dist/beer-store/'});
    res.sendFile(__dirname + '/src/index.html');
});

// Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.
app.listen(process.env.PORT || 8080, () => {
    console.log('Listen on port..');
});