"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_1 = __importDefault(require("./route/user"));
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
app.use('/chat', user_1.default);
app.get('/', (req, res) => {
    res.send('Hello World of feedback! ');
});
app.listen(8000, () => {
    console.log(' app listening on port 8000!');
});
//# sourceMappingURL=app.js.map