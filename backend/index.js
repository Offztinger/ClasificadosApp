const express = require('express');
const bodyParser = require('body-parser');
const { connection } = require('./db/dbconnector');
const { router } = require('./routes/routes');

const app = express();

app.use(bodyParser.json());
app.use('/api/', router);
app.listen('3000', ()=> {
    connection.connect(error => {
        if (error) {
            console.error('DB Connection Error.' + error.stack);
            return;
        }

        console.log('Database ON');
    })
    console.log('Server on port: 3000');
});
