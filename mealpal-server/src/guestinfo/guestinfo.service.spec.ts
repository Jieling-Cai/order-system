import { Test, TestingModule } from '@nestjs/testing';
import { GuestinfoService } from './guestinfo.service';

describe('GuestinfoService', () => {
  let service: GuestinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestinfoService],
    }).compile();

    service = module.get<GuestinfoService>(GuestinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
