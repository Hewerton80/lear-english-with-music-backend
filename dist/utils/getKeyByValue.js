"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyByValue = void 0;
const getKeyByValue = (object, value) => {
    const keys = Object.keys(object);
    return keys.find((key) => object[key] === value);
};
exports.getKeyByValue = getKeyByValue;
//# sourceMappingURL=getKeyByValue.js.map