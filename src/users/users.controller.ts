import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // singleton -> create obj exact once and use it many times
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findALl(@Query('role') role?: 'Admin' | 'Engineer' | 'Developer') {
    return this.usersService.findAll(role);
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'Admin' | 'Engineer' | 'Developer';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateUser: {
      name?: string;
      email?: string;
      role?: 'Admin' | 'Engineer' | 'Developer';
    },
  ) {
    // return { id, ...updateUser };
    return this.usersService.update(+id, updateUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
