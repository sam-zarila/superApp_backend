import { ApiProperty } from "@nestjs/swagger";

export class userLogin{
     @ApiProperty()
      email: string;
    
      @ApiProperty()
      password: string;
}