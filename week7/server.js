const app = require('./dynamic');

require('./Accept_from_inputs');
require('./validation');

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});