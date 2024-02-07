const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose without destructuring
require('dotenv').config();
const upload = require('express-fileupload')

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { notfound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

const uri = "mongodb+srv://emmanuellalubinda:5INoz2bADXU1866b@cluster0.fm3eejv.mongodb.net/myfirstdb?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri);/* { useNewUrlParser: true, useUnifiedTopology: true });*/
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(upload())
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(notfound);
app.use(errorHandler);

connect('mongodb');

app.listen(5001, () => {
  console.log("Server running on port 5001");
});

