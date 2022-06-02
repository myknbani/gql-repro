import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Membership } from './membership';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field(() => [Membership])
  memberships: Membership[];
}
