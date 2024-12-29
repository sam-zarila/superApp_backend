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

  findMarketPlaceItem() :Promise<Marketplace[]>{
     return this.marketplaceRepository.find()
  }

  async updateMarketPlaceItem(id:number, updatedData: Partial<Marketplace>){

    await this.marketplaceRepository.update(id, updatedData)
    return this.marketplaceRepository.findOneBy({id})

  }
  async removeMarketPlaceItem(id:number) :Promise<void>{
    await this.marketplaceRepository.delete(id)
    

  }
}
