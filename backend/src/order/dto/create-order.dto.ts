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
  email: string;

  @ArrayUnique()
  tickets: number[];

  @IsInt()
  @IsPositive()
  address: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  user?: number;
}
