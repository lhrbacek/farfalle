import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { VenueService } from './venue.service';
import { Venue as VenueModel } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('venue')
@ApiTags('venue')
export class VenueController {
  constructor(
    private readonly venueService: VenueService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Create one venue' })
  @ApiResponse({
    status: 200,
    description: 'The created venue',
  })
  @ApiResponse({
    status: 403,
    description: 'Not privileged',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createVenueDto: CreateVenueDto,
    @Request() req,
  ): Promise<VenueModel> {
    await this.authService.isPrivileged(req);
    return await this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: 'Get all venues' })
  @ApiResponse({
    status: 200,
    description: 'The found venues',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get()
  async findAll() {
    return await this.venueService.findAll();
  }

  @ApiOperation({ summary: 'Get one venue' })
  @ApiResponse({
    status: 200,
    description: 'The found venue',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an venue',
    type: Number,
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.venueService.findOne(id);
  }

  @ApiOperation({ summary: 'Update one venue' })
  @ApiResponse({
    status: 200,
    description: 'The updated venue',
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
    description: 'Should be an id of an venue',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateVenueDto: UpdateVenueDto,
    @Request() req,
  ) {
    await this.authService.isPrivileged(req);
    return await this.venueService.update(id, updateVenueDto);
  }

  @ApiOperation({ summary: 'Delete one venue' })
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
    description: 'Should be an id of an venue',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.venueService.delete(id);
  }
}
