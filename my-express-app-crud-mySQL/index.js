require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const moviesRouter = require('./src/routes/moviesRouter');
const cors = require('cors');
const userRouter = require('./src/routes/userRouter.js');


var corsOptions = {
  origin: 'http://localhost:3000', // Ganti dengan domain yang diizinkan
  optionsSuccessStatus: 200 // Untuk beberapa browser lama
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', moviesRouter)
app.use('/', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


