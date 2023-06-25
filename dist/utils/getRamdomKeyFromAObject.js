"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRamdomKeyFromAObject = void 0;
const getRandomIntInclusive_1 = require("./getRandomIntInclusive");
const getRamdomKeyFromAObject = (object) => {
    const arrayKeys = Object.keys(object);
    return arrayKeys[(0, getRandomIntInclusive_1.getRandomIntInclusive)(0, arrayKeys.length - 1)];
};
exports.getRamdomKeyFromAObject = getRamdomKeyFromAObject;
//# sourceMappingURL=getRamdomKeyFromAObject.js.map