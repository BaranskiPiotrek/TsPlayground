import { ArgsType, Field } from "@nestjs/graphql";
import { MaxLength } from "class-validator";

@ArgsType()
export class ToolArgs {
  @Field()
  @MaxLength(30)
  title: string;
}
