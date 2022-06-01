export class PlayWithPerformancesDto {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  lengthMinutes: number;
  director: string;
  performances: {
    id: number;
    dateTime: Date;
    venue: {
      id: number;
      name: string;
    };
  }[];
}
