var express = require('express');
var router = express.Router();
const {register,login} =require("../controllers/usersC");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/register",register);
router.get("/login",login);

module.exports = router;
