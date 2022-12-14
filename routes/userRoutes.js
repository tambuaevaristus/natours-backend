const express = require("express");
const {getAllUsers, getUser, updateUser,deleteUser, createUser} = require('./../controller/userController')
const authController = require('./../controller/authController')


const router = express.Router();
router.post('signup', authController.signup)

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;