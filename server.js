const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cors = require('cors');

const extractIpParameter = () => 
    process.argv[2] ? process.argv[2] : 'localhost';

const ip = extractIpParameter();
app.set('ip', ip);    

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

require('./api')(app);
require('./routes/login')(app);

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});