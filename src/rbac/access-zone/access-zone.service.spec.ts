import { Test, TestingModule } from '@nestjs/testing';
import { AccessZoneService } from './access-zone.service';

describe('AccessZoneService', () => {
  let service: AccessZoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessZoneService],
    }).compile();

    service = module.get<AccessZoneService>(AccessZoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
