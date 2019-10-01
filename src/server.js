const express = require('express');

const app = express();

// GET, POST, PUT, DELETE
// req.query = Access query params (filter)
// req.params = Access route params (edit, delete)
// req.body = Access the body of the request (create, edit)

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: "Hello Ominstack "});
});

app.put('/users/:id', (req, res) => {
  return res.json({ id: req.params.id });
});

app.post('/users', (req, res) => {
  return res.json(req.body);
});

app.listen(3333);