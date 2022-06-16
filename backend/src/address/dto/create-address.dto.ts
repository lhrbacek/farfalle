import { IsInt, IsNotEmpty, IsPositive, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  street: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  number: number;

  @IsInt()
  @ApiProperty()
  zip: number;

  @MaxLength(50)
  @ApiProperty()
  city: string;
}
