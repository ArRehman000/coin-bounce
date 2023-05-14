const express = require('express');
const authController = require ('../controller/authController');
const commentController = require ('../controller/commentController');
const blogController = require ('../controller/blogController');
const auth = require('../middleware/auth');

const router = express.Router();





//user


//register

router.post('/register', authController.register);


// Login
router.post('/login', authController.login);

// Logout

router.post('/logout', auth, authController.logout);

// refresh

router.get('/refresh', authController.refresh);


// blog
// 1. create
router.post('/blog', auth, blogController.create, );

// 2. get all

router.get('/blog/all', auth, blogController.getAll);

// 3. get blog by id

router.get('/blog/:id', auth, blogController.getById);

//4, update

router.put('/blog', auth, blogController.update);

// 5. delete

router.delete('/blog/:id', auth, blogController.delete );

// Comment
// Create

router.post('/comment', auth, commentController.create);

// Get

router.get('/comment/:id', auth, commentController.getById);


module.exports= router;