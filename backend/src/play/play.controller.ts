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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('play')
@ApiTags('play')
export class PlayController {
  constructor(
    private readonly playService: PlayService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Update one play' })
  @ApiResponse({
    status: 200,
    description: 'The found plays',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorised access',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createPlayDto: CreatePlayDto,
    @Request() req,
  ): Promise<PlayModel> {
    await this.authService.isPrivileged(req);
    return await this.playService.create(createPlayDto);
  }

  @ApiOperation({ summary: 'Find all plays' })
  @ApiResponse({
    status: 200,
    description: 'The found plays',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'query',
    required: true,
    description: 'Query for finding plays',
    type: String,
  })
  @Get()
  async findAll(@Query() query): Promise<PlayWithPerformancesDto[]> {
    let onlyFuture = false;

    if (query.future) {
      onlyFuture = true;
    }
    return await this.playService.findAll(onlyFuture);
  }

  @ApiOperation({ summary: 'Find one play' })
  @ApiResponse({
    status: 200,
    description: 'The found play',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an play',
    type: Number,
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PlayWithPerformancesDto> {
    return await this.playService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one play' })
  @ApiResponse({
    status: 200,
    description: 'The updated play',
  })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an play',
    type: Number,
  })
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

  @ApiOperation({ summary: 'Delete one play' })
  @ApiResponse({
    status: 200,
    description: 'The found plays',
  })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an play',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.playService.delete(id);
  }
}
