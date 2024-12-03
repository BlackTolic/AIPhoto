import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(9999);
    return this.appService.getHello();
  }

  @Post('test')
  test() {
    console.log(999);
    return this.appService.getHello();
  }
}
