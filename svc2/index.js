const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());



app.post('/api/hello', (req, res) => {
  const body = req.body;
  res.json(req.body);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
