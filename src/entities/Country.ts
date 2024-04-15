import { Field, ID, InputType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Country extends BaseEntity{
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  code!: string;
  
  @Column()
  @Field()
  name!: string;
  
  @Column()
  @Field()
  emoji!: string;
  
  @Column()
  @Field()
  codeContinent!: string;
}

@InputType()
export class CountryCreateInput {
  @Column()
  @Field()
  code!: string;
  
  @Column()
  @Field()
  name!: string;
  
  @Column()
  @Field()
  emoji!: string;
  
  @Column()
  @Field()
  codeContinent!: string;
}
