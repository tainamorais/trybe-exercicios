require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on port ${PORT}!!`));

// app.listen(3001, () => console.log('To on na 3001!'));
