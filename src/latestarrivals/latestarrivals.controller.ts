import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { CreateLatestarrivalDto } from './dto/create-latestarrival.dto';
import { UpdateLatestarrivalDto } from './dto/update-latestarrival.dto';

@Controller('latestarrivals')
export class LatestarrivalsController {
  constructor(private readonly latestarrivalsService: LatestarrivalsService) {}

  @Post()
  create(@Body() createLatestarrivalDto: CreateLatestarrivalDto) {
    return this.latestarrivalsService.create(createLatestarrivalDto);
  }

  @Get()
  findAll() {
    return this.latestarrivalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.latestarrivalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLatestarrivalDto: UpdateLatestarrivalDto) {
    return this.latestarrivalsService.update(+id, updateLatestarrivalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.latestarrivalsService.remove(+id);
  }
}
