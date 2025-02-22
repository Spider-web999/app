const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/switches', (req, res) => {
    res.json([{ id: 1, name: 'Living Room Light', status: 'off' }]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
