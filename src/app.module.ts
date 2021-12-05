import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidiModule } from './ridi/ridi.module';

@Module({
  imports: [RidiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
