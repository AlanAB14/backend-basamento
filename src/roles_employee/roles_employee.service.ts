import { Injectable } from '@nestjs/common';
import { CreateRolesEmployeeDto } from './dto/create-roles_employee.dto';
import { UpdateRolesEmployeeDto } from './dto/update-roles_employee.dto';

@Injectable()
export class RolesEmployeeService {
  create(createRolesEmployeeDto: CreateRolesEmployeeDto) {
    return 'This action adds a new rolesEmployee';
  }

  findAll() {
    return `This action returns all rolesEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesEmployee`;
  }

  update(id: number, updateRolesEmployeeDto: UpdateRolesEmployeeDto) {
    return `This action updates a #${id} rolesEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesEmployee`;
  }
}
