import { AccountType } from '@tsailab/core-types';
export declare const CacheKeySplitor = ":";
export declare class CacheKeyHelper {
    static buildRedisKey(...scopes: Array<string | number>): string;
    static buildScopeKey(scope: string, id: string | number): string;
    static buildVerifyKey(scope: string, id: string | number): string;
    static buildVendorTokenKey(scope: string, ...parts: Array<string | number>): string;
    static buildAccessTokenKey(uid: number, clit: string, acctype?: AccountType): string;
    static buildCaptchaKey(uuid: string | number, props?: string): string;
    static buildSmsKey(phone: string): string;
}
export declare function combineCacheKey(...args: Array<string | number>): string;
