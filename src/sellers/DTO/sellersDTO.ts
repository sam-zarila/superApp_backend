import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class  CreateSellersApplicationFormDto{
    ID:number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    
 FirstName:string;
 @IsNotEmpty()
 @IsString()
 @ApiProperty()

    Surname:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    NationalID:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    BusinessName:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    PhoneNumber:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Address:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    BusinessDescription:string;



    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    ApplicationDate:Date;


}

export class UpdateApplicationDto{


    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    
 FirstName:string;
 @IsNotEmpty()
 @IsString()
 @ApiProperty()

    Surname:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()

    NationalID:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    BusinessName:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    PhoneNumber:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    Address:string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    BusinessDescription:string;

   


}






export class selectedDateDTO {
    @IsDateString()
    ApplicationDate: string;
  }