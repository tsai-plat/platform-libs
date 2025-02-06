"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizException = void 0;
const error_code_enum_1 = require("./error.code.enum");
const error_message_1 = require("./error.message");
class BizException extends Error {
    constructor(code, message, options) {
        super(message);
        this._locale = 'zhCN';
        this._code = code;
        const { locale = 'zhCN', error } = options || { locale: 'zhCN' };
        this._locale = locale;
        if (error)
            this._error = error;
    }
    set message(message) {
        this.message = message;
    }
    get code() {
        return this._code;
    }
    get error() {
        return this._error;
    }
    set error(err) {
        this._error = err;
    }
    get message() {
        return super.message;
    }
    static createError(code, message, options) {
        const { locale = 'enUS' } = options || {};
        let localeMessage = message;
        const messages = (0, error_message_1.localeMessages)(locale);
        const c = code.valueOf();
        if (messages[c] && !message?.length) {
            localeMessage = messages[c];
        }
        if (!localeMessage)
            localeMessage = String(code.valueOf());
        return new BizException(c, message, options);
    }
    static IllegalParamterError(message, options) {
        const { locale = 'enUS' } = options || {};
        let localeMessage;
        const code = error_code_enum_1.ErrorCodeEnum.ILLEGAL_ARGS;
        const messages = (0, error_message_1.localeMessages)(locale);
        if (message?.length) {
            localeMessage = message;
        }
        else {
            localeMessage = messages[code.valueOf()] ?? code.valueOf().toString();
        }
        return new BizException(code, localeMessage);
    }
    static ParameterInvalidError(message = '', options) {
        const { locale = 'enUS' } = options || {};
        let localeMessage = message;
        const code = error_code_enum_1.ErrorCodeEnum.PARAMS_INVALID;
        if (!localeMessage?.length) {
            const messages = (0, error_message_1.localeMessages)(locale);
            if (messages[code.valueOf()]) {
                localeMessage = messages[code.valueOf()];
            }
            else {
                localeMessage = `Input parameter invalid.`;
            }
        }
        return new BizException(code, localeMessage);
    }
    static ConfigurationError(message = 'Please check your configuration yaml.', options) {
        const { locale = 'enUS' } = options || {};
        let localeMessage = message;
        const code = error_code_enum_1.ErrorCodeEnum.CONFIGURATION_ERROR;
        if (!localeMessage?.length) {
            const messages = (0, error_message_1.localeMessages)(locale);
            if (messages[code.valueOf()]) {
                localeMessage = messages[code.valueOf()];
            }
            else {
                localeMessage = `Input parameter invalid.`;
            }
        }
        return new BizException(code, localeMessage);
    }
}
exports.BizException = BizException;
//# sourceMappingURL=biz.exception.js.map