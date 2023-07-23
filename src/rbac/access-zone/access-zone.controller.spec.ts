import { Test, TestingModule } from '@nestjs/testing';
import { AccessZoneController } from './access-zone.controller';

describe('AccessZoneController', () => {
  let controller: AccessZoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessZoneController],
    }).compile();

    controller = module.get<AccessZoneController>(AccessZoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
