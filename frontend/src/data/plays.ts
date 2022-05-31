import { Play, PlayOverview } from "../types/play";

export const plays: Play[] = [
  {
    id: 1,
    name: "Les Misérables",
    description: "Souls that have sunk to the bottom of possible troubles, unfortunates lost in the deepest limbo, where no one looks after them anymore... Wretched or wretches? Poor fellows or rascals? Les Misérables!",
    imageURL: "https://www.provazek.cz/files/2022/05/f6dd2f7ed19e0dcfd80e36d7fcd117d9.jpg",
    lengthMinutes: 150,
    director: "Michal Hába"
  },
  {
    id: 2,
    name: "Don Quixote",
    description: "Is Don Quixote a madman who cannot see reality? A genius who is the only one to recognise it? A left-wing activist refusing to accept it? Or is he a contemporary of ours, we who are living four hundred years later in an era in which – in the words of the philosopher Baudrillard – reality does not exist?",
    imageURL: "https://www.provazek.cz/files/2019/10/a0c46ed03d0f0f2de2d0e71fd1be7594.jpg",
    lengthMinutes: 120,
    director: "Jan Mikulášek"
  },
  {
    id: 3,
    name: "Dynasty",
    description: "Chapters from the history of capitalism. At the beginning was a suitcase and a ship to America. At the end, the fourth largest bank in the USA. A story from a time when you could still only trade what you could touch.",
    imageURL: "https://www.provazek.cz/files/2019/08/54d1f7abf11ebf760a77c7d817619b8f.jpg",
    lengthMinutes: 100,
    director: "Michal Dočekal"
  },
  {
    id: 4,
    name: "Meeting of Plotters",
    description: "Do you believe in coincidences? Do you think you have things in your hands? Do you think 5G networks serve to spread the mobile signal or viruses? Is the Earth round?",
    imageURL: "https://www.provazek.cz/files/2021/05/f4e940a94888fe248bbc6a5771fed000.jpg",
    lengthMinutes: 110,
    director: "Petr Erbes, Boris Jedinák"
  },
  {
    id: 5,
    name: "The Gambler",
    description: "Is this still Dostoyevsky? Is this still theatre? This is a production by the controversial director Michal Hába based on Dostoyevsky’s novella. Russian ecstasy, European provocation. And what came first – the chicken or the egg?",
    imageURL: "https://www.provazek.cz/files/2019/08/77f5bf38db68ded895b5bab5a7a898f3.jpg",
    lengthMinutes: 130,
    director: "Michal Hába"
  },
  {
    id: 6,
    name: "Oskar and the Pink Lady",
    description: "Oskar is ten and is ill. Leukaemia or something. Granny Rose from the hospital may be a lot older, but she is a great source of brilliant stories. And unlike his parents, she can talk to him without freaking out.",
    imageURL: "https://www.provazek.cz/files/2019/08/e7c32aa08b86ead7748581a4c96bd5de.JPG",
    lengthMinutes: 60,
    director: "Hana Mikolášková"
  },
  {
    id: 7,
    name: "Rules of the Cathouse",
    description: "Is this still Dostoyevsky? Is this still theatre? This is a production by the controversial director Michal Hába based on Dostoyevsky’s novella. Russian ecstasy, European provocation. And what came first – the chicken or the egg?",
    imageURL: "Where are the limits of bad taste? How much more can the stage take? The theatrical seeing-to of the season. A journey far beyond the imaginary bounds of decency.",
    lengthMinutes: 90,
    director: "Anna Davidová"
  },
  {
    id: 8,
    name: "Better to Go Mad In the Wild",
    description: "Going into the wilderness as an attempt to start afresh, as an attempt at radical self-determination. An attempt to obtain personal and social reform. One’s own utopia. Solitude. What kind of civilization is this where books about escaping it become bestsellers?",
    imageURL: "https://www.provazek.cz/files/2021/01/7335eff75926b4596c69847001b5b84d.jpeg",
    lengthMinutes: 170,
    director: "Anna Davidová"
  },
]

export const playOverviews: PlayOverview[] = [
  {
    id: 1,
    name: "Les Misérables",
    description: "Souls that have sunk to the bottom of possible troubles, unfortunates lost in the deepest limbo, where no one looks after them anymore... Wretched or wretches? Poor fellows or rascals? Les Misérables!",
    imageURL: "https://www.provazek.cz/files/2022/05/f6dd2f7ed19e0dcfd80e36d7fcd117d9.jpg",
    lengthMinutes: 150,
    director: "Michal Hába",
    performances: [
      {
        id: 1,
        dateTime: new Date("2022-08-16"),
        venue: {
          id: 1,
          name: "First Venue",
        }
      },
      {
        id: 2,
        dateTime: new Date("2022-09-20"),
        venue: {
          id: 1,
          name: "First Venue",
        }
      },
      {
        id: 3,
        dateTime: new Date("2022-10-16"),
        venue: {
          id: 1,
          name: "First Venue",
        }
      },
      {
        id: 4,
        dateTime: new Date("2022-1-16"),
        venue: {
          id: 2,
          name: "Second Venue",
        }
      },
    ]
  },
  {
    id: 2,
    name: "Don Quixote",
    description: "Is Don Quixote a madman who cannot see reality? A genius who is the only one to recognise it? A left-wing activist refusing to accept it? Or is he a contemporary of ours, we who are living four hundred years later in an era in which – in the words of the philosopher Baudrillard – reality does not exist?",
    imageURL: "https://www.provazek.cz/files/2019/10/a0c46ed03d0f0f2de2d0e71fd1be7594.jpg",
    lengthMinutes: 120,
    director: "Jan Mikulášek",
    performances: [
      {
        id: 5,
        dateTime: new Date("2022-09-20"),
        venue: {
          id: 1,
          name: "First Venue",
        }
      },
      {
        id: 6,
        dateTime: new Date("2022-10-16"),
        venue: {
          id: 1,
          name: "First Venue",
        }
      },
      {
        id: 7,
        dateTime: new Date("2022-1-16"),
        venue: {
          id: 2,
          name: "Second Venue",
        }
      }
    ]
  },
  {
    id: 3,
    name: "Dynasty",
    description: "Chapters from the history of capitalism. At the beginning was a suitcase and a ship to America. At the end, the fourth largest bank in the USA. A story from a time when you could still only trade what you could touch.",
    imageURL: "https://www.provazek.cz/files/2019/08/54d1f7abf11ebf760a77c7d817619b8f.jpg",
    lengthMinutes: 100,
    director: "Michal Dočekal",
    performances: []
  },
  {
    id: 4,
    name: "Meeting of Plotters",
    description: "Do you believe in coincidences? Do you think you have things in your hands? Do you think 5G networks serve to spread the mobile signal or viruses? Is the Earth round?",
    imageURL: "https://www.provazek.cz/files/2021/05/f4e940a94888fe248bbc6a5771fed000.jpg",
    lengthMinutes: 110,
    director: "Petr Erbes, Boris Jedinák",
    performances: []
  },
  {
    id: 5,
    name: "The Gambler",
    description: "Is this still Dostoyevsky? Is this still theatre? This is a production by the controversial director Michal Hába based on Dostoyevsky’s novella. Russian ecstasy, European provocation. And what came first – the chicken or the egg?",
    imageURL: "https://www.provazek.cz/files/2019/08/77f5bf38db68ded895b5bab5a7a898f3.jpg",
    lengthMinutes: 130,
    director: "Michal Hába",
    performances: []
  },
  {
    id: 6,
    name: "Oskar and the Pink Lady",
    description: "Oskar is ten and is ill. Leukaemia or something. Granny Rose from the hospital may be a lot older, but she is a great source of brilliant stories. And unlike his parents, she can talk to him without freaking out.",
    imageURL: "https://www.provazek.cz/files/2019/08/e7c32aa08b86ead7748581a4c96bd5de.JPG",
    lengthMinutes: 60,
    director: "Hana Mikolášková",
    performances: []
  },
  {
    id: 7,
    name: "Rules of the Cathouse",
    description: "Is this still Dostoyevsky? Is this still theatre? This is a production by the controversial director Michal Hába based on Dostoyevsky’s novella. Russian ecstasy, European provocation. And what came first – the chicken or the egg?",
    imageURL: "Where are the limits of bad taste? How much more can the stage take? The theatrical seeing-to of the season. A journey far beyond the imaginary bounds of decency.",
    lengthMinutes: 90,
    director: "Anna Davidová",
    performances: []
  },
  {
    id: 8,
    name: "Better to Go Mad In the Wild",
    description: "Going into the wilderness as an attempt to start afresh, as an attempt at radical self-determination. An attempt to obtain personal and social reform. One’s own utopia. Solitude. What kind of civilization is this where books about escaping it become bestsellers?",
    imageURL: "https://www.provazek.cz/files/2021/01/7335eff75926b4596c69847001b5b84d.jpeg",
    lengthMinutes: 170,
    director: "Anna Davidová",
    performances: []
  },
]
