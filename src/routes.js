const express = require('express');
const router = express.Router();
const { loggerMiddleware } = require('./middleware/middleware');
const { authenticateToken } = require('./middleware/authMiddleware');
const { 
  registerUser, 
  loginUser,
  checkTokenValidity
} = require('./controllers/authController');
const { 
  postMenu,
  getMenu,
  deleteMenu,

} = require('./controllers/CartController');


// Middleware
router.use(loggerMiddleware);

// Cart manipulation
router.post('/menu', postMenu);
router.get('/menu', getMenu);
router.delete('/menu/:id', deleteMenu);


// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Check token validity route
router.post('/check-token', authenticateToken, checkTokenValidity);

// Export the router
module.exports = router;

