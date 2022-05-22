import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayService } from './play.service';
import { PerformanceService } from '../performance/performance.service';
import { VenueService } from '../venue/venue.service';
import {
  Play as PlayModel,
  Performance as PerformanceModel,
} from '@prisma/client';

@Controller('play')
export class PlayController {
  constructor(
    private readonly playService: PlayService,
    private readonly performanceService: PerformanceService,
  ) {}

  @Post()
  async createPlay(@Body() playData: PlayModel): Promise<PlayModel> {
    return this.playService.create(playData);
  }

  @Get()
  findAllPlays() {
    return this.playService.findAll();
  }

  @Get(':id')
  findOnePlay(@Param('id') id: number) {
    return this.playService.findOne({ id: Number(id) });
  }

  @Delete(':id')
  removePlay(@Param('id') id: number) {
    return this.playService.delete({ id: Number(id) });
  }
}
