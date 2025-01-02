import { Controller, Get } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RandomProductService } from "./randomproducts.services";
import { Marketplace } from "src/entities/marketplace.entity";



@Controller("randomproducts")
@ApiTags("Random Products")
export class RandomController {
  constructor(private readonly randomProductService: RandomProductService) {}

  // Endpoint to get random products
  @Get('getallproductsrandomly')

  @ApiOperation({summary:'random product retrieved made'})
  @ApiResponse({status:201, description:'retrieved'})

  async getRandomProducts(): Promise<Marketplace[]> {
    return this.randomProductService.getRandomProducts();
  }
}

