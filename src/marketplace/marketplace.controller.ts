import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Marketplace } from '../entities/marketplace.entity';

@ApiTags('MarketPlace Endpoint')
@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceservice: MarketplaceService) {}

  @Post()
  @ApiOperation({ summary: 'Posting marketplace item' })
  @ApiBody({ type: Marketplace })
  postMarketplaceItem(@Body() marketplace: Marketplace) {
    return this.marketplaceservice.createMarketPlaceItem(marketplace);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve marketplace items' })
  @ApiResponse({ status: 201, description: 'Marketplace retrieved' })
  getMarketPlaceItems(): Promise<CreateMarketplaceDto[]> {
    return this.marketplaceservice.findMarketPlaceItem();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve marketplace item details' })
  @ApiParam({ name: 'id', description: 'The ID of the marketplace item', type: Number })
  @ApiResponse({ status: 200, description: 'Marketplace item details retrieved successfully', type: Marketplace })
  async getItemDetails(@Param('id') id: number): Promise<Marketplace | null> {
    return this.marketplaceservice.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Updating the marketplace item' })
  @ApiBody({ type: Marketplace })
  @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  updateMarketPlaceItem(@Param('id') id: number, @Body() updatedData: Partial<Marketplace>) {
    return this.marketplaceservice.updateMarketPlaceItem(id, updatedData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleting the marketplace item' })
  @ApiParam({ name: 'id', description: 'The ID of the property', type: Number })
  async removeMarketPlaceItem(@Param('id') id: number) {
    await this.marketplaceservice.removeMarketPlaceItem(id);
    return { message: 'Item deleted successfully' };
  }
}
