
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { CreateLatestarrivalDto } from './dto/create-latestarrival.dto';
import { UpdateLatestarrivalDto } from './dto/update-latestarrival.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Latestarrival } from './entities/latestarrival.entity';

@ApiTags('Latest Arrival Endpoint')
@Controller('latestarrivals')
export class LatestarrivalsController {
  constructor(
    private readonly LatestArrivalsService:LatestarrivalsService
  ){}
  @Post()
  @ApiOperation({summary:"posting latest arrival"})
  @ApiBody({type:Latestarrival})

  postLatestArrival(@Body() latestArrival:Latestarrival){
     return this.LatestArrivalsService.createLatestArrivalItem(latestArrival)
  }

  @Get()
  @ApiOperation({summary:'retrieve latest arrivals'})

  getLatestArrivals() :Promise<CreateLatestarrivalDto[]>{
    return this.LatestArrivalsService.findLatestArrivalItem()

  }



}
