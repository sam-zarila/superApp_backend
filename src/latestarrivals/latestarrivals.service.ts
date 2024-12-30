
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Latestarrival } from './entities/latestarrival.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LatestarrivalsService {

  constructor( @InjectRepository(Latestarrival)  private latestArrivals:Repository<Latestarrival> ){}
  

}
