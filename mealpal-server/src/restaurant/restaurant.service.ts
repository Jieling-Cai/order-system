import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity'
@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private RestaurantRepository: Repository<Restaurant>,
  ) { }
  findAll() {
    return this.RestaurantRepository.find();
  }
}
