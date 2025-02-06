"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeMessages = void 0;
const cn_1 = require("./locales/cn");
const en_1 = require("./locales/en");
const localeMessages = (locale = 'zhCN') => {
    switch (locale) {
        case 'enUS':
            return en_1.default;
        case 'zhCN':
            return cn_1.default;
        default:
            return en_1.default;
    }
};
exports.localeMessages = localeMessages;
//# sourceMappingURL=error.message.js.map