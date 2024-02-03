const express = require('express');
const router = express.Router();
// const personsController = require('../controllers/personsController')
// const signupController = require('../controllers/signupController')
const itemController = require("../controllers/itemController")
// router.get('/get_all_persons', personsController.getPersons)
// router.post('/signup', signupController.signupEmployee)
router.post('/create-item', itemController.createItem)
router.get('/get-all-items', itemController.getAllItems)
module.exports = router;