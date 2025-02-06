import { BaseEntityPropsType } from '../orm';
import { StatusEnum, UserStatusEnum } from '@tsailab/core-types';
export declare class BaseModel implements Partial<BaseEntityPropsType> {
    orgno: string;
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
}
export declare class UpdateSortnoModel {
    id: number;
    sortno: number;
}
export declare class UpdateStatusModel {
    id: number;
    status: StatusEnum;
}
export declare class UpdateUserStatusModel {
    id: number;
    status: UserStatusEnum;
}
