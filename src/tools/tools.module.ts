import { Module } from "@nestjs/common";
import { ToolsService } from "./tools.service";
import { ToolsResolver } from "./tools.resolver";

@Module({
  providers: [ToolsService, ToolsResolver],
})
export class ToolsModule {}
