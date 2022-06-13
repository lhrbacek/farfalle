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
  name?: string;

  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsUrl()
  imageURL?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  lengthMinutes?: number;

  @IsOptional()
  @MaxLength(100)
  director?: string;
}
