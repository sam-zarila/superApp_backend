import { Injectable } from '@nestjs/common';
import { Marketplace } from '../entities/marketplace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarketplaceService {
  constructor(
    @InjectRepository(Marketplace)
    private marketplaceRepository: Repository<Marketplace>,
  ) {}

  createMarketPlaceItem(marketplaceItem: Marketplace) {
    return this.marketplaceRepository.save(marketplaceItem);
  }

  findMarketPlaceItem(): Promise<Marketplace[]> {
    return this.marketplaceRepository.find();
  }

  
  async findById(id: number): Promise<Marketplace | null> {
    return this.marketplaceRepository.findOne({ where: { id } });
  }

  async updateMarketPlaceItem(
    id: number,
    updatedData: Partial<Marketplace>,
  ): Promise<Marketplace | null> {
    await this.marketplaceRepository.update(id, updatedData);
    return this.marketplaceRepository.findOne({ where: { id } });
  }

  async removeMarketPlaceItem(id: number): Promise<void> {
    await this.marketplaceRepository.delete(id);
  }
}
