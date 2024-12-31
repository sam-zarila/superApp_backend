

import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { CreateLatestarrivalDto } from './dto/create-latestarrival.dto';
import { UpdateLatestarrivalDto } from './dto/update-latestarrival.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
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
@Put(':id')
@ApiOperation({summary:'update latest arrivals'})
@ApiBody({type:Latestarrival})
@ApiParam({name:'id', description:'the id of the property', type:Number})

UpdateLatestArrivalItem(@Param('id') id:number, @Body() updateData:Partial<Latestarrival>){

    return this.LatestArrivalsService.UpdateLatestArrivaltem(id,updateData)


}
@Delete(':id')
@ApiOperation({summary:'update latest arrivals'})
@ApiBody({type:Latestarrival})
@ApiParam({name:'id', description:'the id of the property', type:Number})

async removeLatestArrivalItem(@Param('id') id:number){
    await this.LatestArrivalsService.removeLatestArrivallItem(id)
}

}
