import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "./app.service";
import { ContentType } from "./utils";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   * @param request
   * @returns data
   */
  @Get()
  getHello(@Req() request: Request): string {
    if (request.headers["content-type"] === ContentType.JSON) {
      return JSON.stringify(this.appService.getHello());
    }
    return this.appService.getHello();
  }
}
