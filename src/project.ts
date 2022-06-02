import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Membership } from './membership';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Membership])
  memberships: Membership[];
}
