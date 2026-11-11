const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const { customerController } = require("../../controllers")

const router = express.Router();

router.route("/create").post(auth("admin"), customerController.createCoustomer);


module.exports = router;
