import { ToolArgs } from "./dto/tool.args";
import { Tool } from "./models/tool.model";
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { ToolsService } from "./tools.service";
import { NewToolInput } from "./dto/new-tool.args";
import { PubSub } from "graphql-subscriptions";
import { FunctionLog } from "src/utils/logger";

const pubSub = new PubSub();

@Resolver((_of: any) => Tool)
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
  @FunctionLog()
  async createTool(@Args("newToolInput") newToolInput: NewToolInput) {
    const tool = this.toolService.createTool(
      newToolInput.title,
      newToolInput.description
    );
    pubSub.publish("toolAdded", { toolAdded: tool });
    return tool;
  }

  @Subscription((returns) => Tool)
  toolAdded() {
    return pubSub.asyncIterator("toolAdded");
  }
}
