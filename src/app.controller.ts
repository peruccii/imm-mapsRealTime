import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {} // callin alldeclarations

  @Get() // <-- Verb
  getHello(): string { // respective declaration
    return this.appService.getHello();
  }
}
