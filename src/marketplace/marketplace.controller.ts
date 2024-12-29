import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Marketplace } from './entities/marketplace.entity';

@ApiTags('MarketPlace Endpoint')
@Controller('marketplace')
export class MarketplaceController {
  constructor( private readonly marketplaceservice:MarketplaceService){}

  @Post()
  @ApiOperation({summary:'posting marketplace item'})
  @ApiBody({type:Marketplace})

  postMarketplaceItem(@Body() marketplace:Marketplace){

    return this.marketplaceservice.createMarketPlaceItem(marketplace)

  }
  @Get()
}
