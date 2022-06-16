import { IsInt, IsOptional, IsPositive, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {
  @IsOptional()
  @MaxLength(100)
  @ApiProperty()
  name?: string;

  @IsOptional()
  @MaxLength(100)
  @ApiProperty()
  street?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  number?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty()
  zip?: number;

  @IsOptional()
  @MaxLength(50)
  @ApiProperty()
  city?: string;
}
