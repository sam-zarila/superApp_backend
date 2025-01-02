import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marketplace {

    @ApiProperty({description: "unique description of the entity"})
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({description:"image of the item"})
    @Column()
    @IsString()

    image:string;

    @ApiProperty({description:"name of the item"})
    @Column()
    @IsString()
    name: string;

    @ApiProperty({description:"price of the item"})
    @Column()
    @IsNumber()
    price:number

<<<<<<< HEAD:src/marketplace/entities/marketplace.entity.ts
    @ApiProperty({description: "description of the item"})
    @Column()
    @IsString()
    description: string;
=======
    @ApiProperty({description:"name of the item"})
    @Column()
    @IsString()
    description:string
>>>>>>> faf1ce7 (db online):src/entities/marketplace.entity.ts


}
