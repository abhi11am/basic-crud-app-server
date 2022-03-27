const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/", usersController.get_users);
router.get("/:id", usersController.get_user_by_id);
router.post("/create", usersController.create_user);
router.put("/update/:id", usersController.update_user);
router.delete("/delete/:id", usersController.delete_user);

module.exports = router;
