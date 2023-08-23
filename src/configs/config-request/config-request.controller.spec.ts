import { Test, TestingModule } from '@nestjs/testing';
import { ConfigRequestController } from './config-request.controller';
import { ConfigRequestService } from './config-request.service';

describe('ConfigRequestController', () => {
  let controller: ConfigRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigRequestController],
      providers: [ConfigRequestService],
    }).compile();

    controller = module.get<ConfigRequestController>(ConfigRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
