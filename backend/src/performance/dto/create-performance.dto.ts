import { IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreatePerformanceDto {
  @IsDateString()
  dateTime: string;

  @IsInt()
  @IsPositive()
  play: number;

  @IsInt()
  @IsPositive()
  venue: number;
}
