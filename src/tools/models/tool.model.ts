import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "tool" })
export class Tool {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;
}
