import { IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreatePerformanceWithPriceDto {
  @IsDateString()
  dateTime: string;

  @IsInt()
  @IsPositive()
  play: number;

  @IsInt()
  @IsPositive()
  venue: number;

  @IsPositive()
  price: number;
}
