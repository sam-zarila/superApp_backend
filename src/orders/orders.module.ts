import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller'; // Import the controller

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { Orders } from 'src/entities/Order.Entity';


@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  providers: [OrdersService,AppService],
  controllers: [OrdersController,AppController], // Register the controller
  exports: [OrdersService,AppService],
})
export class OrdersModule {}
