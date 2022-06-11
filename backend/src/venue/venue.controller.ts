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

@Controller('venue')
export class VenueController {
  constructor(
    private readonly venueService: VenueService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createVenueDto: CreateVenueDto,
               @Request() req): Promise<VenueModel> {
    await this.authService.isPrivileged(req);
    return await this.venueService.create(createVenueDto);
  }

  @Get()
  async findAll() {
    return await this.venueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.venueService.findOne(id);
  }

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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number,
               @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.venueService.delete(id);
  }
}
