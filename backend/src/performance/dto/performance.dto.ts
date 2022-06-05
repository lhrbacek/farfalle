export class PerformanceDto {
  id: number;
  dateTime: Date;
  play: {
    id: number;
    name: string;
  };
  venue: {
    id: number;
    name: string;
  };
}
