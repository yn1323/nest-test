import { Module } from '@nestjs/common';
import { HogeController } from './hoge.controller';

@Module({
  controllers: [HogeController],
})
export class HogeModule {}
