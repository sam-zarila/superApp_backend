import { ApiProperty } from '@nestjs/swagger';

export class userRegister {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
