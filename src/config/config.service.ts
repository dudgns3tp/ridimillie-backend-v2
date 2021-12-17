import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  naverClientId: string;
  naverClientSecret: string;
  tableName: string;
  constructor(private configService: ConfigService) {
    this.naverClientId = this.configService.get<string>('naverClientId');
    this.naverClientSecret =
      this.configService.get<string>('naverClientSecret');
    this.tableName = this.configService.get<string>('tableName');
  }
}
