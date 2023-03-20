require('dotenv').config();
const express = require('express');
const PORT = process.env.APP_PORT;

const employeesController = require('./Controllers/employeesController')

const app = express();

app.use(express.json());

// recebe rota e callback
// para retornar todos os employees, tabela employees
app.get('/employees', employeesController.getAll)

// para inserir um único employee
app.post('/employee', employeesController.create);

// para inserir um array de employees
app.post('/employees', employeesController.createMany);

// penúltima coisa
app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: 'internal server error' });
});

// última coisa
app.listen(PORT, () => console.log(`server running on port ${PORT}!`));
