import { ToolArgs } from "./dto/tool.args";
import { Tool } from "./models/tool.model";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ToolsService } from "./tools.service";

@Resolver((of) => Tool)
export class ToolsResolver {
  recipesService: any;
  constructor(private readonly toolService: ToolsService) {}

  @Query((returns) => [Tool])
  toolsByTitle(@Args() toolArgs: ToolArgs): Promise<Tool[]> {
    return this.toolService.toolsByTitle(toolArgs);
  }

  @Query((returns) => [Tool])
  getAllTools(): Promise<Tool[]> {
    return this.toolService.getAllTools();
  }

  @Mutation((returns) => Tool)
  async createTool(
    @Args("title") title: string,
    @Args("description") description: string
  ) {
    return this.toolService.createTool(title, description);
  }
}
