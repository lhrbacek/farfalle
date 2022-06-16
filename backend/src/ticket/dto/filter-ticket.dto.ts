import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterTicketDto {
  @IsOptional()
  @IsDateString()
  @ApiProperty()
  from?: Date;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  user?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  performance?: number;
}
