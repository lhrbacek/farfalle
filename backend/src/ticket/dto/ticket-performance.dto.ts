export class TicketWithPerformanceDto {
  id: number;
  price: number;
  row: number;
  seat: number;
  status: string;
  reservedAt: Date | null;
  performance: {
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
  };
}
