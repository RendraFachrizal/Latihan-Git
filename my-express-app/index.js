const express = require('express');
const { moviesRouter } = require('./src/routes/moviesRouter');
const app = express();
const port = 3000;






app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', moviesRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


