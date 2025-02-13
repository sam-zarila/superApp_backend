import { IsNotEmpty, IsNumber, IsString, IsDate } from "class-validator";  // Import IsDate for OrderDate validation
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    ID: number;


    @Column({ nullable: false})
    @IsString({ message: 'image of food' })
    FoodImage:string;

    @Column({ nullable: false, unique: true })
    @IsString({ message: 'Order number must be a string' })
    OrderNumber: string;


    @Column({ nullable: false, unique: true})
    @IsString({ message: 'name of restraunt' })
    RestrauntName: string;

    @Column({ nullable: false })
    @IsString({ message: 'Customer name must be a string' })
    CustomerName: string;

    @Column({ nullable: false })
    @IsString({ message: 'food name must be a string' })
    FoodName: string;

    @Column({ type: 'decimal', nullable: false })  // Specify the type correctly
    @IsNotEmpty({ message: 'Price cannot be empty' })
    @IsNumber({}, { message: 'Price must be a number' })  
    Price: number;

    @Column({ nullable: false })
    @IsNotEmpty({ message: 'Quantity cannot be empty' })
    @IsNumber({}, { message: 'Quantity must be a number' })  
    Quantity: number;

    @Column({ nullable: true })
    @IsString({ message: 'Description must be a string' })
    Description?: string;  // Optional field

    @Column({ nullable: false })
    @IsString({ message: 'Location must be a string' })
    CustomerLocation: string;

    @Column({ nullable: false })
    @IsString({ message: 'Phone number must be a string' })
    CustomerPhoneNumber: string;

    @Column({ nullable: false })
    @IsString({ message: 'Phone number must be a string' })
    RestrauntPhoneNumber: string;



    @Column({ type: 'timestamp', nullable: false })  // Specify the type for OrderDate
    @IsNotEmpty({ message: 'Order date cannot be empty' })
    @IsDate({ message: 'Order date must be a valid date' })  // Validate date format
    OrderDate: Date;
}
