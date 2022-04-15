import { PlaysService } from './plays.service';
import { PerformancesService } from '../performances/performances.service';
import { Play as PlayModel } from '@prisma/client';
export declare class PlaysController {
    private readonly playsService;
    private readonly performancesService;
    constructor(playsService: PlaysService, performancesService: PerformancesService);
    createPlay(playData: PlayModel): Promise<PlayModel>;
    findAllPlays(): Promise<PlayModel[]>;
    findOnePlay(id: number): Promise<PlayModel>;
    removePlay(id: number): Promise<PlayModel>;
}
