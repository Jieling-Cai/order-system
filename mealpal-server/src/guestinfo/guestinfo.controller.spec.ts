import { Test, TestingModule } from '@nestjs/testing';
import { GuestinfoController } from './guestinfo.controller';
import { GuestinfoService } from './guestinfo.service';

describe('GuestinfoController', () => {
  let controller: GuestinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestinfoController],
      providers: [GuestinfoService],
    }).compile();

    controller = module.get<GuestinfoController>(GuestinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
