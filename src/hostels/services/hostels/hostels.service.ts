import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardingHouse } from 'src/entities/Hostel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HostelsService {

    constructor(
        @InjectRepository(BoardingHouse) private boardingHouseRepository:Repository<BoardingHouse>,
    ){}

    async createBoardingHouse(){}
}
