const express = require("express"); 
const { addUser, getAllUsers, updateUser } = require('../controller/user-controller');
const router = express.Router(); 

router.post('/', addUser); 

router.get('/', getAllUsers);

router.put('/', updateUser);

module.exports = router; 