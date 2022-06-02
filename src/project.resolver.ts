import {
  Args,
  Field,
  InputType,
  PickType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { Project } from './project';

// I just put the class here
@InputType()
class ProjectInput extends PickType(Project, [
  'description',
  'name',
] as const) {}

@Resolver(() => Project)
export class ProjectResolver {
  @Query(() => String)
  sayHi(@Args('project') project: ProjectInput) {
    return `Hi, ${project.name}`;
  }
}
