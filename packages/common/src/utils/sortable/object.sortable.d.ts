export type ObjectType = Record<string, number | string | boolean>;
export declare const objectKeySorted: (obj: Record<string, any>) => Record<string, any>;
export declare const mapToObj: (map: Map<string, any>) => ObjectType;
