import { Injectable } from "@nestjs/common";
import { ToolArgs } from "./dto/tool.args";
import { Tool } from "./models/tool.model";

const dbTools: Tool[] = [
  {
    id: "1",
    title: "Test",
    description: "Some desc",
    creationDate: new Date(),
  },
  {
    id: "2",
    title: "Test2",
    description: "Some desc2",
    creationDate: new Date(),
  },
];

@Injectable()
export class ToolsService {
  async toolsByTitle(toolsArgs: ToolArgs): Promise<Tool[]> {
    return dbTools.filter((tool) => tool.title === toolsArgs.title);
  }

  async getAllTools(): Promise<Tool[]> {
    return dbTools;
  }

  async createTool(title: string, description: string): Promise<Tool> {
    const newTool = {
      id: "3",
      title,
      description,
      creationDate: new Date(),
    };
    dbTools.push(newTool);
    return newTool;
  }
}
