const express = require('express');

const router = express.Router();

const actionsController = require('../controllers/action_controller');

//MiddleWare to decode data coming from browser
router.use(express.urlencoded({extended : true}));


module.exports = router;