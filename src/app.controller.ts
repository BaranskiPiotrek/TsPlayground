import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guards";
import { LocalAuthGuard } from "./auth/guards/local-auth.gurads";
import { ContentType } from "./utils";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get("/")
  getHello(@Req() request: Request): string {
    if (request.headers["content-type"] === ContentType.JSON) {
      return JSON.stringify(this.appService.getHello());
    }
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Req() req) {
    return req.user;
  }
}
