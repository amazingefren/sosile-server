import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import 'reflect-metadata';

@ObjectType()
export class Post {
  @Field(() => Number)
  id: number;

  @Field(() => User, { nullable: true })
  author?: User;

  @Field(() => String)
  content: string;

  @Field(() => Date)
  date: Date;

  @Field(() => Date)
  updated: Date;

  @Field(() => [PostHistory], { nullable: true })
  history?: PostHistory[];

  @Field(() => [User], { nullable: true })
  likes?: User[];

  @Field(() => [Post], { nullable: true })
  replies?: Post[];
}

@ObjectType()
export class PostHistory {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  content: string;

  /* 1 parent, or multiple: can be swapped later in relation to post.schema.ts
   * parent: Post + parentId: Post.id (aka number)?
   * or: parent => number || parent => post || parentId => number
   */
  @Field(() => Post)
  parent?: Post;
}

@InputType()
export class CreatePostInput {
  @Field({ nullable: false })
  content: string;
}
