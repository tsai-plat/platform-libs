"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSDKApiUrl = buildSDKApiUrl;
function buildSDKApiUrl(baseUrl, sdkPath, queryParams) {
    const apiPath = sdkPath.toString().startsWith('/')
        ? sdkPath.toString().slice(1)
        : sdkPath.toString();
    let url = baseUrl.endsWith('/')
        ? `${baseUrl}${apiPath}`
        : `${baseUrl}/${apiPath}`;
    if (queryParams && Object.keys(queryParams).length) {
        const params = [];
        Object.keys(queryParams).forEach((k) => {
            params.push(`${k}=${queryParams[k]?.toString ? queryParams[k].toString() : queryParams[k]}`);
        });
        const hasQuery = url.indexOf('?') > 0;
        url = hasQuery
            ? `${url}&${params.join('&')}`
            : `${url}?${params.join('&')}`;
    }
    return url;
}
//# sourceMappingURL=url.helper.js.map