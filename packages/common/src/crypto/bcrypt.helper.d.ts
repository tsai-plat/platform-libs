export declare class BcryptHelper {
    static encryptPassword(password?: string, rounds?: number): Promise<string>;
    static keccak256(uid: number, json?: Record<string, any>): Promise<string>;
    static validPassword(password: string, enpassword?: string): Promise<boolean>;
}
