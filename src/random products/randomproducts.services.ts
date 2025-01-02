import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Marketplace } from "src/entities/marketplace.entity";

import { Repository } from "typeorm";


@Injectable()
export class RandomProductService {
  constructor(
    @InjectRepository(Marketplace)
    private readonly productRepository: Repository<Marketplace>
  ) {}

  // Fetch random products without a limit
  async getRandomProducts(): Promise<Marketplace[]> {
    return this.productRepository
      .createQueryBuilder("product")
      .orderBy("RANDOM()") // Randomly order products
      .getMany();
  }
}
