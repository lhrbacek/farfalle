import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, MaxLength, Min } from 'class-validator';

export class CreateVenueDto {
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsInt()
  @Min(1)
  @ApiProperty()
  rows: number;

  @IsInt()
  @Min(1)
  @ApiProperty()
  cols: number;
}
