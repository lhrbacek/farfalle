// for home card
export interface Play {
  id: number,
  name: string,
  description: string,
  imageURL: string,
  lengthMinutes: number
  director: string,
}

// for play card
export interface PlayOverview {
  id: number,
  name: string,
  description: string,
  imageURL: string,
  lengthMinutes: number
  director: string,
  performances: PerformanceShort[]
}

export interface PerformanceShort {
  id: number,
  dateTime: Date,
  venue: {
    id: number,
    name: string
  }
}
