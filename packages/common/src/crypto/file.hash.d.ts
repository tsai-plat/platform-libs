import { Encoding } from 'crypto';
export declare function calcHash(content?: string, opts?: {
    encoding?: Encoding;
    alg?: string;
}): string;
