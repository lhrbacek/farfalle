// for booking page
export interface PerformanceBooking {
  id: number,
  dateTime: string,
  venue: {
    id: number,
    name: string,
    rows: number,
    cols: number
  },
  play: {
    name: string
  },
  tickets: {
    id: number,
    price: number,
    row: number,
    seat: number,
    status: number,
  }
}
