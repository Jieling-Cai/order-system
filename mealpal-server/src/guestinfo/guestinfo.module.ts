import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Guestinfo} from './entities/guestinfo.entity'
import { GuestinfoService } from './guestinfo.service';
import { GuestinfoController } from './guestinfo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Guestinfo])],
  controllers: [GuestinfoController],
  providers: [GuestinfoService]
})
export class GuestinfoModule {}
