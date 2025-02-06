"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToObj = exports.objectKeySorted = void 0;
const objectKeySorted = (obj) => {
    if (!Object.keys(obj)?.length)
        return obj;
    return Object.keys(obj)
        .sort()
        .reduce((sortedObj, key) => {
        sortedObj[key] = obj[key];
        return sortedObj;
    }, {});
};
exports.objectKeySorted = objectKeySorted;
const mapToObj = (map) => {
    const obj = {};
    for (const [k, v] of map) {
        obj[k] = v;
    }
    return obj;
};
exports.mapToObj = mapToObj;
//# sourceMappingURL=object.sortable.js.map