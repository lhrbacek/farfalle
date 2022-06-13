import { IsDateString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterTicketDto {
  @IsOptional()
  @IsDateString()
  from?: Date;

  @IsOptional()
  @IsInt()
  @IsPositive()
  user?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  performance?: number;
}
