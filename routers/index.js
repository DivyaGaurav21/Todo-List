
const express = require('express');
//setup express router
const router = express.Router();
const homeController = require('../controllers/home_controller')


console.log('router loaded')

router.get('/' , homeController.home);
router.use('/users' , require('./user'))


module.exports = router ;