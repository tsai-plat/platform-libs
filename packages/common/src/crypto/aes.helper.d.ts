import { AESOptionsType } from '../types';
export declare const AES_KEY_LENGTH = 32;
export declare const AES_ALGORITHM_CBC = "aes-256-cbc";
export declare function genRandomAppKey(): string;
export declare class AESCipher {
    protected alg: string;
    private readonly key;
    private readonly iv;
    constructor(appKey: string);
    get opts(): AESOptionsType;
    get hexOpts(): AESOptionsType;
    encode(text: string): string;
    decode(encryptedData: any): string;
    static parseAppKey(appKey: string): {
        key: Buffer<ArrayBufferLike>;
        iv: Buffer<ArrayBufferLike>;
    };
    static fromBase64(base64: string): Buffer;
    static fromBase64ToHex(base64: string): string;
    static hexToBase64(hex: string): string;
    static newInstance(appKey: string): AESCipher;
}
