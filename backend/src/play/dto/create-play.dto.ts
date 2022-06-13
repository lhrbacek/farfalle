import { IsInt, IsPositive, IsUrl, MaxLength } from 'class-validator';

export class CreatePlayDto {
  @MaxLength(100)
  name: string;

  @MaxLength(1000)
  description: string;

  @IsUrl()
  imageURL: string;

  @IsInt()
  @IsPositive()
  lengthMinutes: number;

  @MaxLength(100)
  director: string;
}
