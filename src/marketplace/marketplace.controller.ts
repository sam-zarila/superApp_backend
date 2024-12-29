import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('MarketPlace Endpoint')
@Controller('marketplace')
export class MarketplaceController {
 
}
