export interface TicketProps {
  name: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  row: number;
  col: number;
}

export interface SeatProps {
  id: number,
  row: number,
  col: number,
  status: number,
      // 0 --> free
      // 1 --> booked (maybe by someone else)
      // 2 --> full
}
