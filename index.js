const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})