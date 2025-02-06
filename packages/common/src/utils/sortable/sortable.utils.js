"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareSortnoASC = compareSortnoASC;
exports.compareSortnoDESC = compareSortnoDESC;
function compareSortnoASC(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
function compareSortnoDESC(a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
}
//# sourceMappingURL=sortable.utils.js.map