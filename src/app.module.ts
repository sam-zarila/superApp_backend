import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketplaceModule } from './marketplace/marketplace.module';
<<<<<<< HEAD
import { Marketplace } from './marketplace/entities/marketplace.entity';
import { LatestarrivalsModule } from './latestarrivals/latestarrivals.module';
import { Latestarrival } from './latestarrivals/entities/latestarrival.entity';
import { CartModule } from './cart/cart.module';
import { cartEntity } from './cart/entities/cart.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'superapp_database',
      entities: [Marketplace, Latestarrival,cartEntity],
=======
import { Marketplace } from './entities/marketplace.entity';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import * as dotenv from 'dotenv'; // Import dotenv
import { OrdersModule } from './orders/orders.module';
import { randomproductsModule } from './random products/randomproducts.modules';
import { SellersController } from './sellers/sellers.controller';
import { SellersModule } from './sellers/sellers.module';
import { DriversController } from './drivers/drivers.controller';
import { DriversService } from './drivers/drivers.service';
import { DriversModule } from './drivers/drivers.module';
import { SellersService } from './sellers/sellers.service';
import { SellersApplicationForm } from './entities/sellersApplication.Entity';
import { Orders } from './entities/Order.Entity';
import { OrdersController } from './orders/orders.controller';
import { url } from 'inspector';

// Load environment variables from .env file
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql' | 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      url:'postgres://iamjxuay:zkxIi10A55LVmiMhgUvetHsZAGelXQlN@lallah.db.elephantsql.com/iamjxuay',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Marketplace, SellersApplicationForm, Orders],
>>>>>>> faf1ce7 (db online)
      synchronize: true,

    }),
    MarketplaceModule,
<<<<<<< HEAD
    LatestarrivalsModule,
    CartModule,
    
=======
    OrdersModule,
    randomproductsModule,
    SellersModule, // Ensure this is imported
    DriversModule,
>>>>>>> faf1ce7 (db online)
  ],
  controllers: [AppController, SellersController, DriversController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
