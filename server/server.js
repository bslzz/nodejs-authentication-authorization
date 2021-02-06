const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./db/initMongoose');

const app = express();

app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api', require('./routes/userRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
