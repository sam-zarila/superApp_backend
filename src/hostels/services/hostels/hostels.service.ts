import { BoardingHouse } from './../../../entities/Hostel.entity';
import { boardingHouseDTO } from './../../DTO/hostel.DTO';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

@Injectable()
export class HostelsService {

    constructor(
        @InjectRepository(BoardingHouse) private boardingHouseRepository:Repository<BoardingHouse>,
    ){}

    async createBoardingHouse(boardingHouseDTO:boardingHouseDTO): Promise<BoardingHouse>{

        const boardingHouse = this.boardingHouseRepository.create(boardingHouseDTO);
        return this.boardingHouseRepository.save(boardingHouse);
    }
}
