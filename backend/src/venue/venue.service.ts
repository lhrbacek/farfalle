import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Venue } from '@prisma/client';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenueService {
  constructor(private prisma: PrismaService) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    return await this.prisma.venue.create({ data: { ...createVenueDto } });
  }

  async findAll(): Promise<Venue[]> {
    return await this.prisma.venue.findMany({});
  }

  async findOne(id: number): Promise<Venue | null> {
    return await this.prisma.venue.findUnique({ where: { id: id } });
  }

  async update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue> {
    return await this.prisma.venue.update({
      where: { id: id },
      data: { ...updateVenueDto },
    });
  }

  async delete(id: number): Promise<Venue> {
    return await this.prisma.venue.delete({ where: { id: id } });
  }
}
