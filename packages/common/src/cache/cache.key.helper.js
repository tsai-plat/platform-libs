"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheKeyHelper = exports.CacheKeySplitor = void 0;
exports.combineCacheKey = combineCacheKey;
const core_types_1 = require("@tsailab/core-types");
const cache_scopes_1 = require("./cache.scopes");
exports.CacheKeySplitor = ':';
class CacheKeyHelper {
    static buildRedisKey(...scopes) {
        return combineCacheKey(...scopes);
    }
    static buildScopeKey(scope, id) {
        return combineCacheKey(...[scope, id]);
    }
    static buildVerifyKey(scope, id) {
        return combineCacheKey('@verify', scope, id);
    }
    static buildVendorTokenKey(scope, ...parts) {
        return combineCacheKey(...[scope, ...parts]);
    }
    static buildAccessTokenKey(uid, clit, acctype = core_types_1.AccountTypeEnum.CUSTOM) {
        let tkScope;
        switch (acctype) {
            case core_types_1.AccountTypeEnum.SYSTEM:
                tkScope = cache_scopes_1.CacheKeyScope.SYSTEM_TOKEN;
                break;
            case core_types_1.AccountTypeEnum.CUSTOM:
                tkScope = cache_scopes_1.CacheKeyScope.CUSTOM_TOKEN;
                break;
            default:
                tkScope = cache_scopes_1.CacheKeyScope.GUEST_TOKEN;
                break;
        }
        return combineCacheKey(tkScope, 'uid', uid, clit);
    }
    static buildCaptchaKey(uuid, props = '') {
        return combineCacheKey(cache_scopes_1.CacheKeyScope.CAPTCH_CODE, props, uuid);
    }
    static buildSmsKey(phone) {
        return combineCacheKey(cache_scopes_1.CacheKeyScope.SMS_CODE, 'phone', phone);
    }
}
exports.CacheKeyHelper = CacheKeyHelper;
function combineCacheKey(...args) {
    return args
        .filter((v) => v !== undefined && ('' + v).length)
        .join(exports.CacheKeySplitor);
}
//# sourceMappingURL=cache.key.helper.js.map