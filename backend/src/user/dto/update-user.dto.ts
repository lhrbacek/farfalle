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
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @MaxLength(50)
  surname?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  address?: number;
}
