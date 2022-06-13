import { StatusOrder } from '@prisma/client';
import { ArrayUnique, IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  status?: StatusOrder;

  @IsOptional()
  @ArrayUnique()
  tickets?: number[];

  @IsOptional()
  @IsInt()
  @IsPositive()
  adress?: number;
}
