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

@Controller('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  // TODO
  @Post()
  async create(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<AddressModel> {
    return await this.addressService.create(createAddressDto);
  }

  @Get()
  async findAll() {
    return await this.addressService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.addressService.findOne(id);
  }

  // TODO
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressService.update(id, updateAddressDto);
  }

  // TODO
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.addressService.delete(id);
  }
}
