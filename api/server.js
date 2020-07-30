//set up logger
const log = require('debug')('api:logging');

//get the express app
const app = require('./app');

//set the port
const port = process.env.PORT || 4000;

//start server and log what port it is running on
app.listen(port, () => log(`API listening on port ${port}!`));