import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.prisma.order.create({
      data: {
        ...createOrderDto,
        status: 'UNCONFIRMED',
        createdAt: Date(),
        tickets: {
          connect: createOrderDto.tickets.map((id) => {
            return {
              id: id,
            };
          }),
        },
        user: { connect: { id: createOrderDto.user } },
        address: { connect: { id: createOrderDto.address } },
      },
    });
  }

  async findAll() {
    return `This action returns all orders`;
  }

  async findOne(id: number): Promise<Order | null> {
    return await this.prisma.order.findUnique({ where: { id: id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return await this.prisma.order.update({
      where: { id: id },
      data: {
        ...updateOrderDto,
        tickets: {
          connect: updateOrderDto.tickets.map((id) => {
            return {
              id: id,
            };
          }),
        },
        address: { connect: { id: updateOrderDto.adress } },
      },
    });
  }

  async remove(id: number): Promise<Order> {
    console.log(`Delete not implemented for ${id}`);
    throw new HttpException(
      {
        status: HttpStatus.NOT_IMPLEMENTED,
        error: 'Delete not implemented!',
      },
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
