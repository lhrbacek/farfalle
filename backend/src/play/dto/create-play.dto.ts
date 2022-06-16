import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUrl, MaxLength } from 'class-validator';

export class CreatePlayDto {
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @MaxLength(1000)
  @ApiProperty()
  description: string;

  @IsUrl()
  @ApiProperty()
  imageURL: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  lengthMinutes: number;

  @MaxLength(100)
  @ApiProperty()
  director: string;
}
