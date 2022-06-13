import { IsDateString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdatePerformanceDto {
  @IsOptional()
  @IsDateString()
  dateTime?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  play?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  venue?: number;
}
