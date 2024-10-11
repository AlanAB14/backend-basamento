import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesEmployeeService } from './roles_employee.service';
import { CreateRolesEmployeeDto } from './dto/create-roles_employee.dto';
import { UpdateRolesEmployeeDto } from './dto/update-roles_employee.dto';

@Controller('roles-employee')
export class RolesEmployeeController {
  constructor(private readonly rolesEmployeeService: RolesEmployeeService) {}

  @Post()
  create(@Body() createRolesEmployeeDto: CreateRolesEmployeeDto) {
    return this.rolesEmployeeService.create(createRolesEmployeeDto);
  }

  @Get()
  findAll() {
    return this.rolesEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesEmployeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolesEmployeeDto: UpdateRolesEmployeeDto) {
    return this.rolesEmployeeService.update(+id, updateRolesEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesEmployeeService.remove(+id);
  }
}
