import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsPostalCode,
  MaxLength,
} from 'class-validator';

export class CreateUserWithAddressDto {
  @IsEmail()
  @MaxLength(254)
  email: string;

  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  surname: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @MaxLength(100)
  addressName: string;

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
