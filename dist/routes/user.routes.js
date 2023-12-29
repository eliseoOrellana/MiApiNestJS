"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {create} from 'domain'
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.post("/users", user_controllers_1.createUser);
router.get("/users", user_controllers_1.getUsers);
router.put("/users/:id", user_controllers_1.updateUser);
router.delete("/users/:id", user_controllers_1.deleteUser);
router.get("/users/:id", user_controllers_1.getUser);
exports.default = router;
