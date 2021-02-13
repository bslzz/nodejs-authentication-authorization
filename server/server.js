const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
require('./db/initMongoose');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//routes
app.use('/user', require('./routes/userRoute'));
app.use('/customer', require('./routes/customerRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
