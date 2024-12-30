import { ApiProperty } from "@nestjs/swagger";

export class CreateLatestarrivalDto {
    @ApiProperty()
    id:number;

    @ApiProperty()
    image:string

    @ApiProperty()
    name:string

    @ApiProperty()
    price:number;

}
