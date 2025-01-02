import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
    export class SellersApplicationForm{
        
        @ApiProperty({description: "unique description of the entity"})
        @PrimaryGeneratedColumn()
        id: number;

        @ApiProperty({description:"first name of a seller"})
        @IsString({ message: 'firstname must be a string' })
        @Column()
        FirstName:string;

        @ApiProperty({description:"surnname of a seller"})
        @IsString({ message: 'surname must be a string' })
        @Column()
        Surname:string;

        @ApiProperty({description:"National of a seller"})
        @IsString({ message: 'nationalID must be a string' })
        @Column()
        NationalID:string;

        @ApiProperty({description:"businessname of a seller"})
        @IsString({ message: 'business name must be a string' })
        @Column()
        BusinessName:string;
         
        @ApiProperty({description:"phone number of a seller"})
        @IsString({ message: 'Phonenumber must be a string' })
        @Column()
        PhoneNumber:string;
         
        @ApiProperty({description:"address of a seller"})
        @IsString({ message: 'address must be a string' })
        @Column()
        Address:string;

        @ApiProperty({description:"business description of a seller"})
        @IsString({ message: 'business description must be a string' })
        @Column()
        BusinessDescription:string


        @ApiProperty({description:"business description of a seller"})
        @IsString({ message: 'business description must be a string' })
        @Column({nullable:true})
        ApplicationDate:Date

}