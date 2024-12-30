import { Injectable } from '@nestjs/common';
import { CreateLatestarrivalDto } from './dto/create-latestarrival.dto';
import { UpdateLatestarrivalDto } from './dto/update-latestarrival.dto';

@Injectable()
export class LatestarrivalsService {
  create(createLatestarrivalDto: CreateLatestarrivalDto) {
    return 'This action adds a new latestarrival';
  }

  findAll() {
    return `This action returns all latestarrivals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} latestarrival`;
  }

  update(id: number, updateLatestarrivalDto: UpdateLatestarrivalDto) {
    return `This action updates a #${id} latestarrival`;
  }

  remove(id: number) {
    return `This action removes a #${id} latestarrival`;
  }
}
