import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address as AddressModel } from '@prisma/client';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AuthService } from 'src/auth/auth.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('address')
@ApiTags('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Create one address' })
  @ApiResponse({
    status: 200,
    description: 'The created address',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Post()
  async create(
    @Body() { name, street, number, zip, city }: CreateAddressDto,
  ): Promise<AddressModel> {
    return await this.addressService.create({
      name: name,
      street: street,
      number: +number,
      zip: +zip,
      city: city,
    });
  }

  @ApiOperation({ summary: 'Find all addresses' })
  @ApiResponse({
    status: 200,
    description: 'The found addresses',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Get()
  async findAll() {
    return await this.addressService.findAll({});
  }

  @ApiOperation({ summary: 'Find one address' })
  @ApiResponse({
    status: 200,
    description: 'The found address',
  })
  @ApiResponse({
    status: 500,
    description: 'Address can not be found',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an address',
    type: Number,
  })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.addressService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one address' })
  @ApiResponse({
    status: 200,
    description: 'The updated address',
  })
  @ApiResponse({
    status: 400,
    description: 'Request error',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an address',
    type: Number,
  })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressService.update(+id, updateAddressDto);
  }

  @ApiOperation({ summary: 'Remove one address' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an address',
    type: Number,
  })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.addressService.delete(+id);
  }
}
