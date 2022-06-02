import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Address, Prisma } from '@prisma/client';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Address | null> {
    return await this.prisma.address.findUnique({ where: { id: id } });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AddressWhereUniqueInput;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput;
  }): Promise<Address[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.address.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    return await this.prisma.address.create({ data: { ...createAddressDto } });
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return await this.prisma.address.update({
      where: { id: id },
      data: { ...updateAddressDto },
    });
  }

  async delete(id: number): Promise<Address> {
    return await this.prisma.address.delete({ where: { id: id } });
  }
}
