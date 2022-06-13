import { IsInt, IsNotEmpty, MaxLength, Min } from 'class-validator';

export class CreateVenueDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsInt()
  @Min(1)
  rows: number;

  @IsInt()
  @Min(1)
  cols: number;
}
