import { Test, TestingModule } from '@nestjs/testing';
import { ConfigApprovalService } from './config-approval.service';

describe('ConfigApprovalService', () => {
  let service: ConfigApprovalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigApprovalService],
    }).compile();

    service = module.get<ConfigApprovalService>(ConfigApprovalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
