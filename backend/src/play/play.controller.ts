import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PlayService } from './play.service';
import { Play as PlayModel } from '@prisma/client';
import { CreatePlayDto } from './dto/create-play.dto';
import { UpdatePlayDto } from './dto/update-play.dto';
import { PlayWithPerformancesDto } from './dto/play-performances.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('play')
export class PlayController {
  constructor(
    private readonly playService: PlayService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createPlayDto: CreatePlayDto,
    @Request() req,
  ): Promise<PlayModel> {
    await this.authService.isPrivileged(req);
    return await this.playService.create(createPlayDto);
  }

  @Get()
  async findAll(@Query() query): Promise<PlayWithPerformancesDto[]> {
    let onlyFuture = false;

    if (query.future) {
      onlyFuture = true;
    }
    return await this.playService.findAll(onlyFuture);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PlayWithPerformancesDto> {
    return await this.playService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePlayDto: UpdatePlayDto,
    @Request() req,
  ) {
    await this.authService.isPrivileged(req);
    return await this.playService.update(id, updatePlayDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.playService.delete(id);
  }
}
