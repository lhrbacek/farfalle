import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PlayService } from './play.service';
import { Play as PlayModel } from '@prisma/client';
import { CreatePlayDto } from './dto/create-play.dto';
import { UpdatePlayDto } from './dto/update-play.dto';

@Controller('play')
export class PlayController {
  constructor(private readonly playService: PlayService) {}

  @Post()
  async create(@Body() createPlayDto: CreatePlayDto): Promise<PlayModel> {
    return await this.playService.create(createPlayDto);
  }

  @Get()
  async findAll() {
    return await this.playService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.playService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePlayDto: UpdatePlayDto) {
    return await this.playService.update(id, updatePlayDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.playService.delete(id);
  }
}
