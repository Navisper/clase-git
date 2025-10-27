const { Router } = require('express');
const comicsController = require('../controllers/comics.js');

const router = Router();

//DEFINE ROUTES HERE
router.get('/comics', comicsController.getComics);

module.exports = router;