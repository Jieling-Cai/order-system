import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestinfoModule } from './guestinfo/guestinfo.module';
import {Guestinfo} from './guestinfo/entities/guestinfo.entity';
import {Restaurant} from './restaurant/entities/restaurant.entity'
import { RestaurantModule } from './restaurant/restaurant.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [Guestinfo,Restaurant],
      synchronize:true,
    }),
    GuestinfoModule,
    RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
