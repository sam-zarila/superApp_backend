import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardingHouse } from 'src/entities/Hostel.entity';

@Injectable()
export class HostelsService {

    constructor(
        @InjectRepository(BoardingHouse)
    ){

    }
}
