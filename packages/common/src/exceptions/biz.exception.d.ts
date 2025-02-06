import { BizErrorOptionType } from './exception.types';
export declare class BizException extends Error {
    private readonly _code;
    private _error;
    private _locale;
    constructor(code: number, message: string, options?: BizErrorOptionType);
    set message(message: string);
    get code(): number;
    get error(): string | string[] | undefined;
    set error(err: string | string[]);
    get message(): string;
    static createError(code: BizException | number, message?: string, options?: BizErrorOptionType): BizException;
    static IllegalParamterError(message?: string, options?: BizErrorOptionType): BizException;
    static ParameterInvalidError(message?: string, options?: BizErrorOptionType): BizException;
    static ConfigurationError(message?: string, options?: BizErrorOptionType): BizException;
}
