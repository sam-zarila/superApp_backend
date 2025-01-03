import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartEntity } from '../entities/cart.entity';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports:[TypeOrmModule.forFeature([cartEntity]),FirebaseModule],
  controllers: [CartController,AppController],
  providers: [CartService,AppService],
  exports:[CartService,AppService]
})
export class CartModule {}

