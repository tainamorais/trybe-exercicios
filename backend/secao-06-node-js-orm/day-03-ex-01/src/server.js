const app = require('./app');
const { PORT = 3001 } = process.env;

app.listen(PORT, () => console.log(`Projeto ouvindo na porta ${PORT}.`));
