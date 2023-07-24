const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uri = 'mongodb+srv://helen:lalalala@atlascluster.cenwrrx.mongodb.net/?retryWrites=true&w=majority'
const { loggerMiddleware } = require('./src/middleware/middleware');
const { authenticateToken } = require('./src/middleware/authMiddleware');
const { 
  registerUser, 
  loginUser,
} = require('./src/controllers/authController');
const { 
  postMenu,
  getMenu,
  deleteMenu,

} = require('./src/controllers/CartController');

// Set up the Express app
const app = express();
const port = 4444;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Middleware
app.use(loggerMiddleware);

// Cart manipulation
app.post('/menu', postMenu);
app.get('/menu', getMenu);
app.delete('/menu/:id', deleteMenu);


// User registration route
app.post('/register', registerUser);

// User login route
app.post('/login', loginUser);

