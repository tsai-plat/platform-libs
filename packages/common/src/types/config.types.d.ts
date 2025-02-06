import { JwtAlgorithm } from './crypto.types';
export type StageEnvType = 'prod' | 'dev' | 'test' | 'stage';
export type AppConfigSchema = {
    name?: string;
    upload?: {
        data: string;
        tmp?: string;
        userfiles?: string;
        sql?: string;
    };
    server: {
        port: number;
    };
};
export type MysqlDBConfigSchema = {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    logging?: boolean;
    synchronize?: boolean;
    autoLoadEntities?: boolean;
};
export type CacheRedisConfigSchema = {
    url?: string;
    host?: string;
    port?: number;
    db: number;
    password?: string | undefined;
    username?: string | undefined;
    ttl?: number;
};
export type GlobalConfigSchema = {
    app: AppConfigSchema;
    mysql: MysqlDBConfigSchema;
    cache: {
        redis: CacheRedisConfigSchema;
        [c: string]: any;
    };
    [k: string]: any;
};
export type JwtConfigSchmeaOptions = {
    version?: string;
    algorithm?: JwtAlgorithm;
    encrptRounds?: number;
    iss: string;
    sub: string;
    aud?: string;
    expirein?: string | number;
    secretKey: string;
    privateKey?: string;
    publicKey?: string;
};
export type CookieConfigSchema = {
    secret?: string;
    httpOnly?: boolean;
    secure?: boolean;
    maxAge: number;
    path?: string;
    sameSite?: 'strict' | 'lax' | 'none';
    [k: string]: any;
};
export type TecentObsSchema = {
    durationSeconds?: string | number;
    appid: string;
    secretId: string;
    secretKey: string;
    bucket: string;
    region: string;
    cdn: string;
    endpoint?: string;
    allowPrefix?: string;
    followRedirect?: boolean;
    storageClass?: 'STANDARD' | 'STANDARD_IA' | 'ARCHIVE' | 'DEEP_ARCHIVE' | 'INTELLIGENT_TIERING' | 'MAZ_STANDARD' | 'MAZ_STANDARD_IA' | 'MAZ_INTELLIGENT_TIERING';
};
export type AliObsSchema = {
    durationSeconds?: string | number;
    appid: string;
    secretId: string;
    secretKey: string;
    bucket: string;
    region: string;
    cdn: string;
};
export type MailerOptionsSchema = {
    from: string;
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
};
