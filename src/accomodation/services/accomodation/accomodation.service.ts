import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRoom } from 'src/entities/Booking.Entity';
import { BoardingHouse } from 'src/entities/Hostel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccomodationService {
  constructor(
    @InjectRepository(BookingRoom) private bookingRoomRepository: Repository<BookingRoom>,
    @InjectRepository(BoardingHouse) private boardingHouseRepository: Repository<BoardingHouse>

  ){}

  private async generateUniqueOderNumber(): Promise<String>{
     
    let isUnique= false;
    let BookingNumber: string;

    while (!isUnique) {

        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        BookingNumber = `SuperApp${randomNumber}`;
        
    }

  }


}
