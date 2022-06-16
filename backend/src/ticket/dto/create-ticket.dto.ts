import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsInt } from 'class-validator';

export class CreateTicketDto {
  @IsPositive()
  @ApiProperty()
  price: number;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  row: number;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  seat: number;

  @IsInt()
  @IsPositive()
  @ApiProperty()
  performance: number;
}
