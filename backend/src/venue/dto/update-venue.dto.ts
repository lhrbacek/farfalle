import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, MaxLength, Min } from 'class-validator';

export class UpdateVenueDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty()
  rows?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty()
  cols?: number;
}
