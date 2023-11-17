const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());



app.post('/api/hello', (req, res) => {
  const body = req.body;
  let result = Number(body.a)+Number(body.b);
  console.log(result);
//   res.json(req.body);
  res.status(200).json({ success: true, response: result });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
