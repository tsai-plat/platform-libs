import { BaseEntity as OrmBaseEntity } from 'typeorm';
export declare class BaseEntity extends OrmBaseEntity {
    id: number;
    createdBy?: number;
    updatedBy?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}
