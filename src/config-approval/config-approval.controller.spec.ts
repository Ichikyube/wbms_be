import { Test, TestingModule } from '@nestjs/testing';
import { ConfigApprovalController } from './config-approval.controller';
import { ConfigApprovalService } from './config-approval.service';

describe('ConfigApprovalController', () => {
  let controller: ConfigApprovalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigApprovalController],
      providers: [ConfigApprovalService],
    }).compile();

    controller = module.get<ConfigApprovalController>(ConfigApprovalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
