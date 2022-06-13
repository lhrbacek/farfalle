import { IsInt, IsNotEmpty, IsOptional, MaxLength, Min } from 'class-validator';

export class UpdateVenueDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  rows?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  cols?: number;
}
