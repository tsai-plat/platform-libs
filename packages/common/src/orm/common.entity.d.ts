import { BaseEntity } from 'typeorm';
export declare class CommonEntity extends BaseEntity {
    id: number;
    orgid?: number;
    createdBy?: number;
    updatedBy?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
