"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseClientType = parseClientType;
const core_types_1 = require("@tsailab/core-types");
function parseClientType(cliid = '') {
    if (!cliid?.length)
        return cliid;
    if (cliid.startsWith(core_types_1.ClientTypeEnum.mobileChat))
        return core_types_1.ClientTypeEnum.mobileChat.valueOf();
    if (cliid.startsWith(core_types_1.ClientTypeEnum.mobileWxChat))
        return core_types_1.ClientTypeEnum.mobileWxChat.valueOf();
    if (cliid.startsWith(core_types_1.ClientTypeEnum.pcAgent))
        return core_types_1.ClientTypeEnum.pcAgent.valueOf();
    if (cliid.startsWith(core_types_1.ClientTypeEnum.system))
        return core_types_1.ClientTypeEnum.system.valueOf();
    if (cliid.startsWith(core_types_1.ClientTypeEnum.saAdmin))
        return core_types_1.ClientTypeEnum.saAdmin.valueOf();
    return '';
}
//# sourceMappingURL=parse.client.util.js.map