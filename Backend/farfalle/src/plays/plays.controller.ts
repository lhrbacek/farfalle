import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaysService } from './plays.service';
import { PerformancesService } from '../performances/performances.service';
import { VenuesService } from '../venues/venues.service';
import { Play as PlayModel, Performance as PerformanceModel } from '@prisma/client'

@Controller('plays')
export class PlaysController {
  constructor(
    private readonly playsService: PlaysService,
    private readonly performancesService: PerformancesService,
  ) {}

  @Post()
  async createPlay(@Body() playData: PlayModel): Promise<PlayModel> {
    return this.playsService.create(playData);
  }

  @Get()
  findAllPlays() {
    return this.playsService.findAll();
  }

  @Get(':id')
  findOnePlay(@Param('id') id: number) {
    return this.playsService.findOne({ id: Number(id) });
  }

  @Delete(':id')
  removePlay(@Param('id') id: number) {
    return this.playsService.delete({ id: Number(id) });
  }
}
