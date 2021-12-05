import { Test, TestingModule } from '@nestjs/testing';
import { RidiService } from './ridi.service';

describe('RidiService', () => {
  let service: RidiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RidiService],
    }).compile();

    service = module.get<RidiService>(RidiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
