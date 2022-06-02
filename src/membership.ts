import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Project } from './project';
import { User } from './user';

@ObjectType()
export class Membership {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => Project)
  project: Project;
}
