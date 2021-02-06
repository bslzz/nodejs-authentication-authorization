const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(`Error connecting to DB: ${err}`);
    } else {
      console.log(`Connected to DB successfully`);
    }
  }
);
