"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const router = require("express").Router();
router.post("/user", user_1.userController);
router.post("/message/:id", user_1.userMessage);
router.get("/allmessages/:id", user_1.allUserMessages);
router.delete("/delete/:id", user_1.deleteUser);
router.get("/:id", user_1.getNameById);
exports.default = router;
//# sourceMappingURL=user.js.map