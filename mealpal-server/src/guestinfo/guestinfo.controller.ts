import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuestinfoService } from './guestinfo.service';
import { CreateGuestinfoDto } from './dto/create-guestinfo.dto';
import { UpdateGuestinfoDto } from './dto/update-guestinfo.dto';

@Controller('guestinfo')
export class GuestinfoController {
  constructor(private readonly guestinfoService: GuestinfoService) {}

  @Post()
  create(@Body() createGuestinfoDto: CreateGuestinfoDto) {
    return this.guestinfoService.create(createGuestinfoDto);
  }

}
