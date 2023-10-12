const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve connect.html
app.get('/connect.html', (req, res) => {
    res.sendFile(__dirname + '/connect.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Replace this with your actual credential validation logic (e.g., database query)
    if (email === 'vishwesh.reddy2001@gmail.com' && password === 'vtu19089') {
        // Successful login
        res.redirect('/dashboard.html'); // Redirect to the dashboard page

    } else {
        // Incorrect credentials
        res.status(401).send('Incorrect email or password');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
