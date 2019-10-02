const express = require('express');

const routes = express.Router();

// routes.get

// GET, POST, PUT, DELETE
// req.query = Access query params (filter)
// req.params = Access route params (edit, delete)
// req.body = Access the body of the request (create, edit)


app.post('/users', (req, res) => {
  return res.json(req.body);
});