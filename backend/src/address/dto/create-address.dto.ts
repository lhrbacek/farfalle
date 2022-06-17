import { Type } from 'class-transformer';
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
