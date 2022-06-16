import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive, MaxLength } from 'class-validator';

export class CreateUserWithAddressDto {
  @IsNotEmpty()
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

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  addressName: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  street: string;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty()
  number: number;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty()
  zip: number;

  @MaxLength(50)
  @ApiProperty()
  city: string;
}
