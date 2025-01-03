import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { Marketplace } from './marketplace/entities/marketplace.entity';
import { LatestarrivalsModule } from './latestarrivals/latestarrivals.module';
import { Latestarrival } from './latestarrivals/entities/latestarrival.entity';
import { CartModule } from './cart/cart.module';
import { cartEntity } from './cart/entities/cart.entity';
import { FirebaseService } from './firebase/services/firebase/firebase.service';
import { FirebaseModule } from './firebase/firebase.module';

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
      synchronize: true,

    }),
    MarketplaceModule,
    LatestarrivalsModule,
    CartModule,
    FirebaseModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
