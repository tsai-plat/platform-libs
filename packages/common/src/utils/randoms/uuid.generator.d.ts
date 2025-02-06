export declare class UuidGenerator {
    static genBase58Uuid(len?: number): Promise<string>;
    static genReqid(len?: number): Promise<string>;
    static createJti(size?: number): Promise<string>;
    static generateAppSecret(opts?: {
        len?: number;
        mode?: 'hex' | 'base58' | 'default';
    }): Promise<string>;
}
