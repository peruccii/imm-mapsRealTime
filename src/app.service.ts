import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { // place with your respective name, type e return
  getHello(): string {
    return 'Hello World!';
  }
}
