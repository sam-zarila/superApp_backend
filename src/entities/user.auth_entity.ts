import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CartEntity } from "./cart.entity";


@Entity()

export class  User{
    @ApiProperty()
    @PrimaryGeneratedColumn()

    id:number;
    @ApiProperty()
    @Column()
    name:string;
    
    @ApiProperty()
    @Column({unique: true})
    email:string;

    @ApiProperty()
    @Column()
    password:string;

    @OneToMany(()=> CartEntity, (cart)=>cart.user)

    cart:CartEntity[];
}