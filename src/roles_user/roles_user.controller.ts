import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesUserService } from './roles_user.service';
import { CreateRolesUserDto } from './dto/create-roles_user.dto';
import { UpdateRolesUserDto } from './dto/update-roles_user.dto';

@Controller('rolesUser')
export class RolesUserController {
  constructor(private readonly rolesUserService: RolesUserService) {}

  @Post()
  create(@Body() createRolesUserDto: CreateRolesUserDto) {
    return this.rolesUserService.create(createRolesUserDto);
  }

  @Get()
  findAll() {
    return this.rolesUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRolesUserDto: UpdateRolesUserDto) {
    return this.rolesUserService.update(id, updateRolesUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rolesUserService.remove(id);
  }
}
