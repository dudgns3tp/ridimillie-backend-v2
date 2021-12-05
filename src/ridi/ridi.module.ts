import { Module } from '@nestjs/common';
import { RidiService } from './ridi.service';
import { RidiController } from './ridi.controller';

@Module({
  controllers: [RidiController],
  providers: [RidiService]
})
export class RidiModule {}
