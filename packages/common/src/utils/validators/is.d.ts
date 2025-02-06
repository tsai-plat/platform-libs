export declare function isNumber<T extends number>(value: T | unknown): value is number;
export declare function isString<T extends string>(value: T | unknown): value is string;
export declare function isNotEmptyString(value: any): boolean;
export declare function isBoolean<T extends boolean>(value: T | unknown): value is boolean;
export declare function isFunction<T extends (...args: any[]) => any | void | never>(value: T | unknown): value is T;
