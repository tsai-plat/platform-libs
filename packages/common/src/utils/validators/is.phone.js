"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is86Phone = void 0;
const is86Phone = (phone) => /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(phone.toString());
exports.is86Phone = is86Phone;
//# sourceMappingURL=is.phone.js.map