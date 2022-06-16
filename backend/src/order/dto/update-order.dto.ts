import { ApiProperty } from '@nestjs/swagger';
import { StatusOrder } from '@prisma/client';
import { ArrayUnique, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @ApiProperty()
  status?: StatusOrder;

  @IsOptional()
  @ArrayUnique()
  @ApiProperty()
  tickets?: number[];

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty()
  adress?: number;
}
