import { Injectable } from '@nestjs/common';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { Marketplace } from './entities/marketplace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarketplaceService {
  constructor( @InjectRepository(Marketplace) private marketplaceRepository:Repository<Marketplace> ){}

  createMarketPlaceItem(marketplaceItem:Marketplace){

    return this.marketplaceRepository.save(marketplaceItem)
  }
}
