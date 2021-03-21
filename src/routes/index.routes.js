const {Router} = require('express');
const router = Router();

const {renderIndex,renderAbout} =require('../controller/index.controller')

//Homw
router.get('/',renderIndex);

// ABOUT
router.get('/about',renderAbout)


module.exports = router;