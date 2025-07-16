import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '../common/response/response.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
    const { password, ...rest } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await this.userService.create({ ...rest, password: hashPassword });
  
    return new ApiResponse(true, 'User created successfully', user);
  }

  @Get()
  async findAll(): Promise<ApiResponse<User[]>> {
    const users = await this.userService.findAll();
    return new ApiResponse(true, 'All users fetched successfully', users);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ApiResponse<User>> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(
        new ApiResponse(false, 'User not found', null, { id }),
      );
    }
    return new ApiResponse(true, 'User fetched successfully', user);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ApiResponse<User>> {
    const updatedUser = await this.userService.update(id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException(
        new ApiResponse(false, 'User to update not found', null, { id }),
      );
    }
    return new ApiResponse(true, 'User updated successfully', updatedUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ApiResponse<any>> {
    const result = await this.userService.remove(id);
    if (!result) {
      throw new NotFoundException(
        new ApiResponse(false, 'User to delete not found', null, { id }),
      );
    }
    return new ApiResponse(true, 'User deleted successfully', result);
  }
}
