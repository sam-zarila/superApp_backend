import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketplaceModule } from './marketplace/marketplace.module';

import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import * as dotenv from 'dotenv'; // Import dotenv
import { OrdersModule } from './orders/orders.module';

import { SellersController } from './sellers/sellers.controller';
import { SellersModule } from './sellers/sellers.module';
import { DriversController } from './drivers/drivers.controller';
import { DriversService } from './drivers/drivers.service';
import { DriversModule } from './drivers/drivers.module';
import { SellersService } from './sellers/sellers.service';

import { OrdersController } from './orders/orders.controller';
import { url } from 'inspector';
import { Marketplace } from './entities/marketplace.entity';
import { SellersApplicationForm } from './entities/sellersApplication.Entity';
import { Orders } from './entities/Order.Entity';
import { randomproductsModule } from './random products/randomproducts.modules';
import { CartModule } from './cart/cart.module';
import { CartController } from './cart/cart.controller';
import { cartEntity } from './entities/cart.entity';
import { FirebaseModule } from './firebase/firebase.module';

// Load environment variables from .env file
dotenv.config();
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as 'mysql' | 'postgres',
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   url:'postgres://iamjxuay:zkxIi10A55LVmiMhgUvetHsZAGelXQlN@lallah.db.elephantsql.com/iamjxuay',
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   entities: [Marketplace, SellersApplicationForm, Orders,cartEntity],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'superapp_database',
      entities: [Marketplace, SellersApplicationForm, Orders,cartEntity],
      synchronize: true,
    }),


    MarketplaceModule,
    OrdersModule,
    randomproductsModule,
    CartModule,
    SellersModule, // Ensure this is imported
    DriversModule,
    FirebaseModule
  ],
  controllers: [AppController, SellersController, DriversController, OrdersController,CartController],
  providers: [AppService],
})
export class AppModule {}
