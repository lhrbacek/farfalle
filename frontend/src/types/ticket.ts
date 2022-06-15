// for cart
export interface Ticket {
  id: number,
  price: number,
  row: number,
  seat: number,
  status: string,
  reservedAt: Date | null,
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
  status: string,
  reservedAt: Date | null,
}

// for profile
export interface TicketProfile {
  id: number,
  price: number,
  row: number,
  seat: number,
  performance: {
    dateTime: Date,
    play: {
      name: string,
    }
  }
}