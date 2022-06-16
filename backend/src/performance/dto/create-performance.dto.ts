import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreatePerformanceDto {
  @IsDateString()
  @ApiProperty()
  dateTime: string;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  play: number;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  venue: number;
}
