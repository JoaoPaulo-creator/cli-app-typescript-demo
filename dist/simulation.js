"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnId = void 0;
const node_crypto_1 = require("node:crypto");
function returnId() {
    return {
        message: "Criando simulation id",
        id: (0, node_crypto_1.randomUUID)(),
    };
}
exports.returnId = returnId;
