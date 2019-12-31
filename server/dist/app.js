"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
// Serving Static Assets from client folder
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../', 'client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../../', 'client', 'build'));
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
