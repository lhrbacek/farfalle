import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive, MaxLength } from 'class-validator';

export class CreateUserWithAddressDto {
  @IsNotEmpty()
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

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  number: number;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  zip: number;

  @MaxLength(50)
  city: string;
}
