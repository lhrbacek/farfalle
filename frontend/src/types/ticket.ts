// for cart
export interface Ticket {
  id: number,
  price: number,
  row: number,
  seat: number,
  status: number,
  performance: {
    id: number,
    dateTime: Date,
    play: {
      id: number,
      name: string
    },
    venue: {
      id: number,
      name: string
    }
  }
}

// for booking
export interface TicketBooking {
  id: number,
  price: number,
  row: number,
  seat: number,
  status: number,
}
