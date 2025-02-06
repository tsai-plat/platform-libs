import { QueryPageParams } from '@tsailab/core-types';
export declare class QueryOptionsDto implements QueryPageParams {
    readonly pageSize?: number;
    readonly page?: number;
    keywords?: string;
}
