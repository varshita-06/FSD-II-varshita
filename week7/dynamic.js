const app = require('./template');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'User Registration',
        message: 'Welcome to Registration'
    });
});

module.exports = app;