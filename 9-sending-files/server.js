const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/html',(req, res) => {
    return res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/json', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.sendFile(path.join(__dirname, '/public/test.json'));
})

app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/image.jpeg'))
})

app.listen(PORT, () =>{
    console.log('Server running on http://localhost:8080');
})