import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsPostalCode,
  MaxLength,
} from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(100)
  street: string;

  @IsInt()
  @IsPositive()
  number: number;

  @IsPostalCode()
  zip: number;

  @MaxLength(50)
  city: string;
}
