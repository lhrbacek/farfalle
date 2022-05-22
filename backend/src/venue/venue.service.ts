import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Venue, Prisma } from '@prisma/client';

@Injectable()
export class VenueService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VenueCreateInput): Promise<Venue> {
    return this.prisma.venue.create({
      data,
    });
  }

  async findAll(): Promise<Venue[]> {
    return this.prisma.venue.findMany({});
  }

  async findOne(
    venueWhereUniqueInput: Prisma.VenueWhereUniqueInput,
  ): Promise<Venue | null> {
    return this.prisma.venue.findUnique({ where: venueWhereUniqueInput });
  }

  async update(params: {
    where: Prisma.VenueWhereUniqueInput;
    data: Prisma.VenueUpdateInput;
  }): Promise<Venue> {
    const { where, data } = params;
    return this.prisma.venue.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.VenueWhereUniqueInput): Promise<Venue> {
    return this.prisma.venue.delete({
      where,
    });
  }
}
