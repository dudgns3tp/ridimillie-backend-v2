import { Test, TestingModule } from '@nestjs/testing';
import { RidiController } from './ridi.controller';
import { RidiService } from './ridi.service';

describe('RidiController', () => {
  let controller: RidiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RidiController],
      providers: [RidiService],
    }).compile();

    controller = module.get<RidiController>(RidiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
