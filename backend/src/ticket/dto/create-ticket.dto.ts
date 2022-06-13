import { IsPositive, IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  row: number;

  @IsInt()
  @IsPositive()
  seat: number;

  @IsInt()
  @IsPositive()
  performance: number;
}
