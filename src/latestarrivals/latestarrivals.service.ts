


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Latestarrival } from './entities/latestarrival.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LatestarrivalsService {

  constructor( @InjectRepository(Latestarrival)  private latestArrivalsRepository:Repository<Latestarrival> ){}

  createLatestArrivalItem(LatestArrival:Latestarrival){

    return this.latestArrivalsRepository.save(LatestArrival)

  }
  findLatestArrivalItem() :Promise<Latestarrival[]>{
    return this.latestArrivalsRepository.find()
  }
  
  async UpdateLatestArrivaltem( id:number, updatedData:Partial<Latestarrival>){
    await this.latestArrivalsRepository.update(id,updatedData)

    return this.latestArrivalsRepository.findOneBy({id})
  }

  async removeLatestArrivallItem(id:number):Promise<void>{

    await this.latestArrivalsRepository.delete({id})

  }

}
