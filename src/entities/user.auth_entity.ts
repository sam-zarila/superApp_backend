import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class  User{
    @ApiProperty()
    @PrimaryGeneratedColumn()

    id:number;

    @Column()
    name:string;

    @Column({unique: true})
    email:string;

    @Column()
    password:string;
}