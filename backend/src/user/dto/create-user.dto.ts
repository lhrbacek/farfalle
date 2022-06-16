import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(254)
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  surname: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  address: number;
}
