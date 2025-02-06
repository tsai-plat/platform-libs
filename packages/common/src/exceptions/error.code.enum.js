"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodeEnum = void 0;
var ErrorCodeEnum;
(function (ErrorCodeEnum) {
    ErrorCodeEnum[ErrorCodeEnum["SUCCESS"] = 0] = "SUCCESS";
    ErrorCodeEnum[ErrorCodeEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ErrorCodeEnum[ErrorCodeEnum["FORBIDDEN"] = 403] = "FORBIDDEN";
    ErrorCodeEnum[ErrorCodeEnum["ILLEGAL_ARGS"] = 400] = "ILLEGAL_ARGS";
    ErrorCodeEnum[ErrorCodeEnum["PARAMS_INVALID"] = 400400] = "PARAMS_INVALID";
    ErrorCodeEnum[ErrorCodeEnum["PASSPORT_UNSAFE"] = 400401] = "PASSPORT_UNSAFE";
    ErrorCodeEnum[ErrorCodeEnum["SERVICE_INTERNAL_ERROR"] = 500] = "SERVICE_INTERNAL_ERROR";
    ErrorCodeEnum[ErrorCodeEnum["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    ErrorCodeEnum[ErrorCodeEnum["CONFIGURATION_ERROR"] = 500501] = "CONFIGURATION_ERROR";
    ErrorCodeEnum[ErrorCodeEnum["DATA_RECORD_CONFLICT"] = 500100] = "DATA_RECORD_CONFLICT";
    ErrorCodeEnum[ErrorCodeEnum["DATA_RECORD_REMOVED"] = 500200] = "DATA_RECORD_REMOVED";
    ErrorCodeEnum[ErrorCodeEnum["USER_NO_PERMISSION"] = 511000] = "USER_NO_PERMISSION";
    ErrorCodeEnum[ErrorCodeEnum["USER_NOT_FOUND"] = 511101] = "USER_NOT_FOUND";
    ErrorCodeEnum[ErrorCodeEnum["USER_FORBIDDEN"] = 511102] = "USER_FORBIDDEN";
    ErrorCodeEnum[ErrorCodeEnum["VENDOR_SERVICE_ERROR"] = 505505] = "VENDOR_SERVICE_ERROR";
})(ErrorCodeEnum || (exports.ErrorCodeEnum = ErrorCodeEnum = {}));
//# sourceMappingURL=error.code.enum.js.map