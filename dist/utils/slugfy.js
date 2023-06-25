"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugfy = void 0;
const slugfy = (text) => {
    let result = text.trim().toLowerCase();
    result = result.replace(/[^\w\s-]/g, '');
    result = result.split(' ').join('-');
    result = result.replace(/-+/g, '-');
    return result;
};
exports.slugfy = slugfy;
//# sourceMappingURL=slugfy.js.map