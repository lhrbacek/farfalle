import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  surname?: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  password?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty()
  address?: number;
}
