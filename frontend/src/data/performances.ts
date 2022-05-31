import { Performance, PerformanceBooking } from "../types/performance";

export const performances: Performance[] = [
  {
    id: 1,
    dateTime: new Date("2022-08-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
    }
  },
  {
    id: 2,
    dateTime: new Date("2022-09-20"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
    }
  },
  {
    id: 3,
    dateTime: new Date("2022-10-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
    }
  },
  {
    id: 4,
    dateTime: new Date("2022-1-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 2,
      name: "Second Venue",
    }
  },
  {
    id: 5,
    dateTime: new Date("2022-09-20"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 1,
      name: "First Venue",
    }
  },
  {
    id: 6,
    dateTime: new Date("2022-10-16"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 1,
      name: "First Venue",
    }
  },
  {
    id: 7,
    dateTime: new Date("2022-1-16"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 2,
      name: "Second Venue",
    }
  }
]

export const performancesBooking: PerformanceBooking[] = [
  {
    id: 1,
    dateTime: new Date("2022-08-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
      rows: 2,
      cols: 2
    },
    tickets: [
      {
        id: 1,
        price: 15,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 2,
        price: 15,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 3,
        price: 15,
        row: 2,
        seat: 1,
        status: 0,
      },
      {
        id: 4,
        price: 15,
        row: 2,
        seat: 2,
        status: 0,
      }
    ]
  },
  {
    id: 2,
    dateTime: new Date("2022-09-20"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
      rows: 2,
      cols: 2
    },
    tickets: [
      {
        id: 5,
        price: 15,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 6,
        price: 15,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 7,
        price: 15,
        row: 2,
        seat: 1,
        status: 0,
      },
      {
        id: 8,
        price: 15,
        row: 2,
        seat: 2,
        status: 0,
      }
    ]
  },
  {
    id: 3,
    dateTime: new Date("2022-10-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 1,
      name: "First Venue",
      rows: 2,
      cols: 2
    },
    tickets: [
      {
        id: 9,
        price: 15,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 10,
        price: 10,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 11,
        price: 15,
        row: 2,
        seat: 1,
        status: 0,
      },
      {
        id: 12,
        price: 10,
        row: 2,
        seat: 2,
        status: 0,
      }
    ]
  },
  {
    id: 4,
    dateTime: new Date("2022-1-16"),
    play: {
      id: 1,
      name: "Les Misérables",
    },
    venue: {
      id: 2,
      name: "Second Venue",
      rows: 1,
      cols: 3
    },
    tickets: [
      {
        id: 13,
        price: 20,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 14,
        price: 10,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 115,
        price: 25,
        row: 2,
        seat: 1,
        status: 0,
      }
    ]
  },
  {
    id: 5,
    dateTime: new Date("2022-09-20"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 1,
      name: "First Venue",
      rows: 2,
      cols: 2
    },
    tickets: [
      {
        id: 26,
        price: 15,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 27,
        price: 10,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 28,
        price: 15,
        row: 2,
        seat: 1,
        status: 0,
      },
      {
        id: 29,
        price: 10,
        row: 2,
        seat: 2,
        status: 0,
      }
    ]
  },
  {
    id: 6,
    dateTime: new Date("2022-10-16"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 1,
      name: "First Venue",
      rows: 2,
      cols: 2
    },
    tickets: [
      {
        id: 30,
        price: 15,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 10,
        price: 10,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 31,
        price: 15,
        row: 2,
        seat: 1,
        status: 0,
      },
      {
        id: 32,
        price: 10,
        row: 2,
        seat: 2,
        status: 0,
      }
    ]
  },
  {
    id: 7,
    dateTime: new Date("2022-1-16"),
    play: {
      id: 2,
      name: "Don Quixote",
    },
    venue: {
      id: 2,
      name: "Second Venue",
      rows: 1,
      cols: 3
    },
    tickets: [
      {
        id: 33,
        price: 20,
        row: 1,
        seat: 1,
        status: 0,
      },
      {
        id: 34,
        price: 10,
        row: 1,
        seat: 2,
        status: 0,
      },
      {
        id: 35,
        price: 25,
        row: 2,
        seat: 1,
        status: 0,
      }
    ]
  }
]
