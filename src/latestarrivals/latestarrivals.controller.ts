
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatestarrivalsService } from './latestarrivals.service';
import { CreateLatestarrivalDto } from './dto/create-latestarrival.dto';
import { UpdateLatestarrivalDto } from './dto/update-latestarrival.dto';

@Controller('latestarrivals')
export class LatestarrivalsController {
  constructor(
    private readonly LatestArrivalsService:LatestarrivalsService
  ){}
}
