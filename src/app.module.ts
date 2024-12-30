import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { Marketplace } from './marketplace/entities/marketplace.entity';
import { LatestarrivalsModule } from './latestarrivals/latestarrivals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'superapp_database',
      entities: [Marketplace],
      synchronize: true,

    }),
    MarketplaceModule,
    LatestarrivalsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
