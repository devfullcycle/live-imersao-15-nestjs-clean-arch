import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
//serviços - container de serviços
@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('rota')
  action(){

  }
}
