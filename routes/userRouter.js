const userController = require('../controllers/userController.js');

const router = require('express').Router();
//ROTAS
//addUser
router.post('/addUser', userController.addUser);
//singleUser
router.get('/:id', userController.getOneUser);
//updateUser
router.put('/:id', userController.updateUser);
//loginUser
router.get('/login/:email&:password', userController.loginUser);

module.exports = router;