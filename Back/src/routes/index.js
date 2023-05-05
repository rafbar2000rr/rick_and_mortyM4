const {Router} = require('express');
var {getCharById} = require('../controllers/getCharById.js');
var {getCharDetail} = require('../controllers/getCharDetail.js');
var {addFav, getFavs, deleteFav} = require('../controllers/favController.js')
const {postFav} =require('../controllers/postFav.js')
const {getFavs} =require('../controllers/getFavs.js')
const {deleteFav} = require('../controllers/deleteFav.js')
const {postUser} = require('../controllers/postUser.js')
const {login} = require('../controllers/login.js')

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post('/fav', postFav);
router.get('/fav', getFavs);
router.delete('/fav/:id', deleteFav);

router.get('/login', login);
router.post('/login', postUser);


module.exports = router;