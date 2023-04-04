import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateGuestinfoDto } from './dto/create-guestinfo.dto';
import { UpdateGuestinfoDto } from './dto/update-guestinfo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Guestinfo } from './entities/guestinfo.entity'
@Injectable()
export class GuestinfoService {
  constructor(
    @InjectRepository(Guestinfo)
    private GuestinfoRepository: Repository<Guestinfo>,
  ) { }
  create(createGuestinfoDto: CreateGuestinfoDto) {
    console.log("--CreateGuestinfoDto--", createGuestinfoDto)
    const { name, phone } = { ...createGuestinfoDto }
    let valueArray = name.split(" ").filter(item => item && item)
    let len = phone.toString().length
    let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let filervalue = phone.toString().split("").filter(item => numberList.includes(item))
    if (valueArray.length >= 2 && (len >= 10 && len <= 11) && (filervalue.length == phone.toString().split("").length)) {
      return this.GuestinfoRepository.save(createGuestinfoDto)
    } else {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
  }
}
