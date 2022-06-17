import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayUnique,
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class CreateOrderDto {
  @IsEmail()
  @MaxLength(254)
  @ApiProperty()
  email: string;

  @ArrayUnique()
  @ApiProperty()
  tickets: number[];

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty()
  address: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty()
  user?: number;
}
