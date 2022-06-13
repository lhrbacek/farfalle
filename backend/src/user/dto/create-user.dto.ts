import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
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

  @IsInt()
  @IsPositive()
  address: number;
}
