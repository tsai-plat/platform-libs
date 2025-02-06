export interface UsernoInfo {
    uno: string;
    value: string;
}
export declare class RandomHelper {
    static shortId(): string;
    static randomState(): string;
    static genRandomCacheKey(): string;
    static buildUno(seqno: number, seeds: string[]): UsernoInfo;
    static parseUno(uno36: string): string;
    static validUno(uno: string): boolean;
    static randomNumberCode(len?: number): string;
}
