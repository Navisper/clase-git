import {Router, Request, Response} from 'express';
import comicsController from '../controllers/comics.js';

const router = Router();

//DEFINE ROUTES HERE
router.get();
router.get('/comics', comicsController.getComics);

module.exports = router;