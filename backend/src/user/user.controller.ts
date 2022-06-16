import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserWithAddressDto } from './dto/create-user-with-address.dto';
import { AddressService } from 'src/address/address.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ReturnUserInfoNoPasswordDto } from './dto/return-user-info.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly addressService: AddressService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Create one user' })
  @ApiResponse({
    status: 200,
    description: 'The created user',
  })
  @ApiResponse({
    status: 409,
    description: 'Email conflict',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @Post()
  async create(
    @Body()
    {
      email,
      name,
      surname,
      password,
      addressName,
      street,
      number,
      zip,
      city,
    }: CreateUserWithAddressDto,
  ): Promise<UserModel> {
    const emailInUse = await this.userService.findOne(null, email);

    if (emailInUse) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT, //409
          error: 'This email is already registered',
        },
        HttpStatus.CONFLICT,
      );
    }
    const address = await this.addressService.create({
      street: street,
      number: +number,
      zip: +zip,
      city: city,
      name: addressName,
    });

    return await this.userService.create({
      email: email,
      name: name,
      surname: surname,
      password: password,
      address: address.id,
    });
  }

  @ApiOperation({ summary: 'Get all user' })
  @ApiResponse({
    status: 200,
    description: 'The found users',
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
  @Get()
  async findAll(@Request() req): Promise<ReturnUserInfoNoPasswordDto[]> {
    await this.authService.isPrivileged(req);
    return await this.userService.findAll({});
  }

  @ApiOperation({ summary: 'Get one user' })
  @ApiResponse({
    status: 200,
    description: 'The found user',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorised access',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an user',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Request() req,
  ): Promise<ReturnUserInfoNoPasswordDto> {
    await this.authService.isAllowed(req, +id);
    const user = await this.userService.findOne(+id);

    if (!user) {
      return null;
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  @ApiOperation({ summary: 'Update one user' })
  @ApiResponse({
    status: 200,
    description: 'The updates user',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorised access',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an user',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ): Promise<UserModel> {
    await this.authService.isAllowed(req, +id);
    return await this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete one user' })
  @ApiResponse({
    status: 200,
    description: 'The updates user',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorised access',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of an user',
    type: Number,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number, @Request() req): Promise<UserModel> {
    await this.authService.isAllowed(req, +id);
    return await this.userService.delete(+id);
  }
}
