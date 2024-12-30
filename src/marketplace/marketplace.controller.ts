import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({summary: 'retrieve marketplaceitems'})
  @ApiResponse({status:201, description:"marketplace retrieved"})

  getMarketPlaceItems() :Promise<CreateMarketplaceDto[]>{

    return this.marketplaceservice.findMarketPlaceItem()
    
  }
 @Put(':id')
 @ApiOperation({summary:"updating the marketpalce item"})
 @ApiBody({type:Marketplace})
 @ApiParam({ name:'id', description:'the ID of the property', type:Number})

 updateMarketPlaceItem(@Param('id') id:number ,@Body() updatedData:Partial<Marketplace>){
  return  this.marketplaceservice.updateMarketPlaceItem(id, updatedData)
 }

 @Delete(':id')
 @ApiOperation({summary:"updating the marketpalce item"})
 @ApiBody({type:Marketplace})
 @ApiParam({ name:'id', description:'he ID of the property', type:Number})

 async removeMarketPlaceItem(@Param("id") id:number){
    await this.marketplaceservice.removeMarketPlaceItem(id)
    return this.marketplaceservice.removeMarketPlaceItem(id)
 }
}
