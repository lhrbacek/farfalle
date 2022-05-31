import { TicketBooking } from "./ticket"

// for program
export interface Performance {
  id: number,
  dateTime: Date,
  play: {
    id: number,
    name: string
  },
  venue: {
    id: number,
    name: string,
  }
}

// for booking
export interface PerformanceBooking {
  id: number,
  dateTime: Date,
  play: {
    id: number,
    name: string,
  },
  venue: {
    id: number,
    name: string,
    rows: number,
    cols: number
  },
  tickets: TicketBooking[]
}
