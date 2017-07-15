const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;
const api = require('./backend/routes');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);
app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});



app.listen(PORT, error => {
    error
        ?
        console.error(error) :
        console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});