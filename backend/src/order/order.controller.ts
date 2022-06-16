import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Create one order' })
  @ApiResponse({
    status: 200,
    description: 'The created order',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.create(createOrderDto);
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({
    status: 200,
    description: 'The found orders',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get()
  async findAll() {
    return await this.orderService.findAll();
  }

  @ApiOperation({ summary: 'Get one order' })
  @ApiResponse({
    status: 200,
    description: 'The found order',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.orderService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one order' })
  @ApiResponse({
    status: 200,
    description: 'The updated order',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an order',
    type: Number,
  })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return await this.orderService.update(+id, updateOrderDto);
  }

  @ApiOperation({ summary: 'Update one order' })
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
    description: 'Should be an id of an order',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number, @Request() req) {
    await this.authService.isPrivileged(req);
    return await this.orderService.remove(+id);
  }
}
