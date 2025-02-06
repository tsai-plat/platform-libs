"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseDate = exports.increaseDay = void 0;
const date_fns_1 = require("date-fns");
const increaseDay = (from, amount) => {
    return (0, date_fns_1.addDays)(from, amount);
};
exports.increaseDay = increaseDay;
const increaseDate = (from, amount) => {
    const strAmount = String(amount);
    const len = strAmount.length;
    if (typeof amount === 'number') {
        return (0, date_fns_1.addSeconds)(from, amount);
    }
    else if (/^\d+d$/.test(amount)) {
        return (0, date_fns_1.addDays)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+h$/.test(amount)) {
        return (0, date_fns_1.addHours)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+m$/.test(amount)) {
        return (0, date_fns_1.addMinutes)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+M$/.test(amount)) {
        return (0, date_fns_1.addMonths)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+s$/.test(amount)) {
        return (0, date_fns_1.addSeconds)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+w$/.test(amount)) {
        return (0, date_fns_1.addWeeks)(from, Number(strAmount.substring(0, len - 1)));
    }
    else if (/^\d+y$/.test(amount)) {
        return (0, date_fns_1.addYears)(from, Number(strAmount.substring(0, len - 1)));
    }
    else {
        throw new Error(`Parameter amount illegal ${amount}.`);
    }
};
exports.increaseDate = increaseDate;
//# sourceMappingURL=time.caclutor.js.map