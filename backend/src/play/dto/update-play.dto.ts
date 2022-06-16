import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsUrl,
  MaxLength,
} from 'class-validator';

export class UpdatePlayDto {
  @IsOptional()
  @MaxLength(100)
  @ApiProperty()
  name?: string;

  @IsOptional()
  @MaxLength(1000)
  @ApiProperty()
  description?: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  imageURL?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  lengthMinutes?: number;

  @IsOptional()
  @MaxLength(100)
  @ApiProperty()
  director?: string;
}
