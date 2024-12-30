import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Latestarrival {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty()
    @Column()
    image:string


    @ApiProperty()
    @Column()
    name:string

    @ApiProperty()
    @Column()
    price:number;
}
