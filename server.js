
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/offer_01', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','offers_pages', 'first.html'));
});
app.get('/offer_02', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','offers_pages', 'second.html'));
});
app.get('/offer_03', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','offers_pages', 'third.html'));
});


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
