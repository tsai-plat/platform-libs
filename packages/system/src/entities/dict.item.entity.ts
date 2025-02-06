import { CommonEntity } from '@tsai-platform/common';
import { StatusEnum } from '@tsailab/core-types';
import { Transform, Type } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'sys_dict_item',
})
export class SysDictItemEntity extends CommonEntity {
  @Type(() => Number)
  @Column({
    name: 'dict_id',
    type: 'int',
    nullable: false,
    comment: '字典ID',
  })
  // @ManyToOne(() => SysDictEntity, (dict) => dict.items)
  // @JoinColumn({ name: 'dict_id' })
  dictId: number;

  @Column({
    name: 'label',
    type: 'varchar',
    length: 128,
    nullable: true,
    default: '',
    comment: 'Select option label',
  })
  label: string;

  @Column({
    name: 'value',
    type: 'varchar',
    length: 128,
    nullable: false,
    default: '',
    comment: 'Select option value ',
  })
  value: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
    name: 'icon',
    comment: 'Record icon',
  })
  icon: string;

  @Type(() => Number)
  @Transform(({ value }) => Number(value))
  @Column({
    type: 'bigint',
    name: 'sortno',
    nullable: true,
    default: 0,
    comment: 'region sortno',
  })
  sortno: number;

  @Column({
    type: 'tinyint',
    nullable: true,
    default: 1,
    name: 'status',
    comment: 'status,0-forbidden,1-normal',
  })
  status: StatusEnum;

  @Type(() => Boolean)
  @Transform(({ value }) => Boolean(value))
  @Column({
    name: 'default_actived',
    type: 'tinyint',
    nullable: true,
    default: null,
    comment: 'Record is default actived',
  })
  defaultActived: boolean;

  @Column({
    type: 'longtext',
    nullable: true,
    name: 'extra',
    comment: 'dict item extra json string content',
  })
  extra: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
    name: 'remark',
    comment: 'Record remark',
  })
  remark: string;
}
