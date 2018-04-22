import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'


@Entity()
export default class Game extends BaseEntity {

   
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable: false})
  name: string

  @Column('text', {nullable: false})
  color: string

  @Column('json')
  board: object
}



//@Column tries to infer dataType from js type
// changed board: JSON to object. Only show empty array/obejct when set JSON

// static colors: number;

