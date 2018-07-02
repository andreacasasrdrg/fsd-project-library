const express = require('express');
const router = express.Router();

// Require controllers modules.
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookInstanceController = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', bookController.index);

// POST request for creating Book.
router.post('/book/create', bookController.bookCreatePost);

// POST request to delete Book.
router.delete('/book/:id/delete', bookController.bookDeleteDelete);

// POST request to update Book.
router.put('/book/:id/update', bookController.bookUpdatePut);

// GET request for one Book.
router.get('/book/:id', bookController.bookDetail);

// GET request for list of all Book items.
router.get('/books', bookController.bookList);


// POST request for creating Author.
router.post('/author/create', authorController.authorCreatePost);

// POST request to delete Author.
router.delete('/author/:id/delete', authorController.authorDeleteDelete);

// POST request to update Author.
router.put('/author/:id/update', authorController.authorUpdatePut);

// GET request for one Author.
router.get('/author/:id', authorController.authorDetail);

// GET request for list of all Authors.
router.get('/authors', authorController.authorList);

/// GENRE ROUTES ///

//POST request for creating Genre.
router.post('/genre/create', genreController.genreCreatePost);

// POST request to delete Genre.
router.delete('/genre/:id/delete', genreController.genreDeleteDelete);

// GET request to update Genre.
router.put('/genre/:id/update', genreController.genreUpdatePut);

// GET request for one Genre.
router.get('/genre/:id', genreController.genreDetail);

// GET request for list of all Genre.
router.get('/genres', genreController.genreList);

/// BOOKINSTANCE ROUTES ///

// POST request for creating BookInstance.
router.post('/bookinstance/create', bookInstanceController.bookinstanceCreatePost);

// GET request to delete BookInstance.
router.delete('/bookinstance/:id/delete', bookInstanceController.bookinstanceDeleteDelete);

// GET request to update BookInstance.
router.put('/bookinstance/:id/update', bookInstanceController.bookinstanceUpdatePut);

// GET request for one BookInstance.
router.get('/bookinstance/:id', bookInstanceController.bookinstanceDetail);

// GET request for list of all BookInstance.
router.get('/bookinstances', bookInstanceController.bookinstanceList);

module.exports = router;
