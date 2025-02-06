import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class  CreateOrderDto{
    ID:number;
    @IsNotEmpty()
    @IsString()
    @ApiProperty()


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    RestrauntName:string
    
 OrderNumber:string;
 @IsNotEmpty()
 @IsString()
 @ApiProperty()
   
 @IsNotEmpty()
 @IsString()
 @ApiProperty()
 CustomerName:string;

 @IsNotEmpty()
 @ApiProperty()
 @IsString({ message: 'image of food' })
 FoodImage:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    FoodName:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Price:number;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Quantity:number;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Description:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    CustomerLocation:string;

    @IsString({ message: 'Phone number must be a string' })
    @ApiProperty()
    @IsNotEmpty()
    RestrauntPhoneNumber: string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    CustomerPhoneNumber:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    OrderDate:Date;


}








export class UpdateOrderDto{


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    CustomerName:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    FoodName:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Quantity:number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Description:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    CustomerLocation:string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    CustomerPhoneNumber:string;

   


}











export class selectedDateDTO {
    @IsDateString()
    OrderDate: string;
  }

 