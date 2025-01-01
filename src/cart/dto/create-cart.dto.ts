import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({ description: 'unique description of the entity' })
  id: number;
 
  @ApiProperty({ description: 'image of the item' })
  item: number;

  @ApiProperty({description:"quantity of the item"})
  quantity: number

  @ApiProperty({ description: 'image of the item' })
  image: string;

  @ApiProperty({ description: 'name of the item' })
  name: string;

  @ApiProperty({ description: 'price of the item' })
  price: number;

  @ApiProperty({ description: 'description of the item' })
  description: string;
}
