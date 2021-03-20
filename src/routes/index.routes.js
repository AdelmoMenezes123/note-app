const {Router} = require('express');
const router = Router();

const {renderIndex,renderAbout} =require('../controller/index.controller')

//Homw
router.get('/',renderIndex);

// ABOUT
router.get('/about',renderAbout)

// router.get('/', (req, res) => {
//     return res.render('index')
// })

// router.get('/', (req, res) => {
//     return res.render('index')
// })
module.exports = router;