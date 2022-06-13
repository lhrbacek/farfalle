import {
  IsInt,
  IsOptional,
  IsPositive,
  IsPostalCode,
  MaxLength,
} from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @MaxLength(100)
  street?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  number?: number;

  @IsOptional()
  @IsPostalCode()
  zip?: number;

  @IsOptional()
  @MaxLength(50)
  city?: string;
}
