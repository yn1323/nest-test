import { Controller, Get } from '@nestjs/common';

@Controller('hoge')
export class HogeController {
  @Get()
  hoge(): string {
    return 'hoge';
  }
}
