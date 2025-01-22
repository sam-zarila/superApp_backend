import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { bookingdto } from 'src/accomodation/DTO/bookingDTO';
import { BookingRoom } from 'src/Entities/Booking.Entity';
import { BoardingHouse } from 'src/entities/Hostel.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class AccomodationService {
  constructor(
    @InjectRepository(BookingRoom)
    private bookingRoomRepository: Repository<BookingRoom>,
    @InjectRepository(BoardingHouse)
    private boardingHouseRepository: Repository<BoardingHouse>,
  ) {}

  private async generateUniqueOrderNumber(): Promise<string> {
    let isUnique = false;
    let BookingNumber: string;

    while (!isUnique) {
      const randomNumber = Math.floor(10000 + Math.random() * 90000);
      BookingNumber = `Silverest${randomNumber}`;

      const existingBooking = await this.bookingRoomRepository.findOne({
        where: { BookingNumber },
      });

      if (!existingBooking) {
        isUnique = true;
      }
    }

    return BookingNumber;
  }

  async createBooking(bookingDto: bookingdto): Promise<BookingRoom & { checkout_url: string }> {
    const boardingHouse = await this.boardingHouseRepository.findOne({
      where: { id: bookingDto.boardingHouseId },
    });

    if (!boardingHouse) {
      throw new NotFoundException('Boarding house not found');
    }

    const maxPeople = boardingHouse.maxPeople || 1;
    const currentBookingsCount = await this.bookingRoomRepository.count({
      where: {
        boardingHouse: { id: bookingDto.boardingHouseId },
      },
    });

    let remainingSpaces = maxPeople - currentBookingsCount;
    if (remainingSpaces <= 0) {
      throw new ConflictException('This room is fully booked.');
    }

    const BookingNumber = await this.generateUniqueOrderNumber();

    const booking = this.bookingRoomRepository.create({
      BookingNumber,
      studentName: bookingDto.studentName,
      emailAddress: bookingDto.emailAddress,
      phoneNumber: bookingDto.phoneNumber,
      bookingDate: bookingDto.bookingDate,
      price: bookingDto.Price,
      bookingFee: bookingDto.BookingFee,
      boardingHouse,
    });

    await this.bookingRoomRepository.save(booking);

    remainingSpaces--;

    if (remainingSpaces === 1) {
      console.warn('Hurry up! Be the last one to book this room!');
    } else if (remainingSpaces > 1) {
      console.warn(`Hurry up! Only ${remainingSpaces} bed spaces remaining for this room.`);
    }

    // Generate the checkout URL using PayChangu API
    const checkout_url = await this.generateCheckoutUrl(booking);

    // Return the booking with the checkout URL
    return { ...booking, checkout_url };
  }

  private async generateCheckoutUrl(booking: BookingRoom): Promise<string> {
    try {
      const response = await axios.post(
        'https://api.paychangu.com/checkout', // Replace with the actual PayChangu API endpoint
        {
          amount: booking.bookingFee,
          currency: 'MWK',
          customer: {
            name: booking.studentName,
            email: booking.emailAddress,
            phone: booking.phoneNumber,
          },
          metadata: {
            bookingNumber: booking.BookingNumber,
          },
        },
        {
          headers: {
            Authorization: `Bearer YOUR_PAYCHANGU_API_KEY`, // Replace with your PayChangu API key
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.checkout_url; // Adjust based on the actual API response
    } catch (error) {
      console.error('Failed to generate checkout URL:', error.message);
      throw new Error('Failed to generate checkout URL.');
    }
  }
}
