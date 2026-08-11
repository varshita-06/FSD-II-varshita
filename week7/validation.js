const app = require('./app');

app.post('/validate', (req, res) => {
    const { username, age } = req.body;

    if (!username || !age) {
        return res.send('Username and age are required');
    }

    if (Number(age) < 18) {
        return res.send('Enter a valid age above 18');
    }

    res.send(`Registration successful! Username: ${username}, Age: ${age}`);
});

module.exports = app;