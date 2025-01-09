import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.auth_entity';


@Entity()
export class CartEntity {
  @ApiProperty({ description: 'Unique description of the entity' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item: number;

  @Column()
  @ApiProperty()
  quantity: number;

  @ApiProperty({ description: 'Image of the item' })
  @Column()
  @IsString()
  image: string;

  @ApiProperty({ description: 'Name of the item' })
  @Column()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Price of the item' })
  @Column()
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Description of the item' })
  @Column()
  @IsString()
  description: string;

  // Define a ManyToOne relationship with the User entity
  @ManyToOne(() => User, (user) => user.cart) // This assumes a `cart` property exists on the `User` entity
  @JoinColumn({ name: 'userId' }) // This specifies the column name in the database
  @ApiProperty({ description: 'User who owns this cart' })
  user: User;
}
