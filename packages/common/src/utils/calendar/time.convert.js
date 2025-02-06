"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDurationVolumeToSeconds = void 0;
const time_caclutor_1 = require("./time.caclutor");
const convertDurationVolumeToSeconds = (duration) => {
    if (typeof duration === 'number')
        return duration;
    if (!/^\d+(d|h|m|M|s|w|y)$/.test(duration))
        throw new Error(`Parameter value illegal ${duration}.`);
    const strAmount = String(duration);
    const now = new Date().valueOf();
    const durationVal = (0, time_caclutor_1.increaseDate)(now, strAmount);
    return Math.floor((durationVal.valueOf() - now) / 1000);
};
exports.convertDurationVolumeToSeconds = convertDurationVolumeToSeconds;
//# sourceMappingURL=time.convert.js.map