import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdatePerformanceDto {
  @IsOptional()
  @IsDateString()
  @ApiProperty()
  dateTime?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  play?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  venue?: number;
}
