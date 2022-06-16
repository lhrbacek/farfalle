import { ApiProperty } from '@nestjs/swagger';
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

  @IsInt()
  @IsPositive()
  @ApiProperty()
  address: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  user?: number;
}
