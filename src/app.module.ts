import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HogeModule } from './hoge/hoge.module';

@Module({
  imports: [HogeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
