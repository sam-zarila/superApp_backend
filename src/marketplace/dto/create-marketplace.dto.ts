import { ApiProperty } from "@nestjs/swagger";

export class CreateMarketplaceDto {
    
    @ApiProperty()
    id:number;

    @ApiProperty()
    image:string;

    @ApiProperty()
    name:string

    @ApiProperty()
    price:string
}
