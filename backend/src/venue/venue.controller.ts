import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { VenueService } from './venue.service';
import { Venue as VenueModel } from '@prisma/client';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  async create(@Body() createVenueDto: CreateVenueDto): Promise<VenueModel> {
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

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateVenueDto: UpdateVenueDto,
  ) {
    return await this.venueService.update(id, updateVenueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.venueService.delete(id);
  }
}
