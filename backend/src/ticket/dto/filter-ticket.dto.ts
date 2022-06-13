import { IsDate, IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterTicketDto {
  @IsOptional()
  @IsDate()
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
