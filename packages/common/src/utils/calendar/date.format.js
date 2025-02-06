"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDBTimeString = exports.formatDateTime = exports.formatDateExpr = exports.formatDate = exports.DB_DATETIME_EXPR = void 0;
const date_fns_1 = require("date-fns");
exports.DB_DATETIME_EXPR = 'yyyy-MM-dd HH:mm:ss.SSSS';
const formatDate = (date) => {
    if (!date)
        date = new Date();
    if (date instanceof Date) {
        return (0, date_fns_1.format)(date, 'yyyy-MM-dd');
    }
    const _date = new Date(date);
    return (0, date_fns_1.format)(_date, 'yyyy-MM-dd');
};
exports.formatDate = formatDate;
const formatDateExpr = (date, expr = 'yyyyMMdd') => {
    if (!date)
        date = new Date();
    if (date instanceof Date) {
        return (0, date_fns_1.format)(date, expr);
    }
    const _date = new Date(date);
    return (0, date_fns_1.format)(_date, expr);
};
exports.formatDateExpr = formatDateExpr;
const formatDateTime = (date, expr = 'yyyy-MM-dd HH:mm:ss') => {
    if (!date)
        date = new Date();
    if (date instanceof Date) {
        return (0, date_fns_1.format)(date, expr);
    }
    const _date = new Date(date);
    return (0, date_fns_1.format)(_date, expr);
};
exports.formatDateTime = formatDateTime;
const convertDBTimeString = (input) => {
    if (!input)
        throw new Error('input an number,string or date required.');
    if (input instanceof Date)
        return (0, date_fns_1.format)(input, exports.DB_DATETIME_EXPR);
    const d = typeof input === 'string' && /^[\d]{10,}/.test(input)
        ? new Date(parseInt(input))
        : new Date(input);
    return (0, date_fns_1.format)(d, exports.DB_DATETIME_EXPR);
};
exports.convertDBTimeString = convertDBTimeString;
//# sourceMappingURL=date.format.js.map