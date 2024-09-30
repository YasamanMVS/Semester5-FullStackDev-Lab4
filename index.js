const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route for GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Route for GET /user with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Yasaman';
    const lastname = req.query.lastname || 'Mirvahabi Sabet';
    res.json({ firstname, lastname });
});

// Route for POST /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});