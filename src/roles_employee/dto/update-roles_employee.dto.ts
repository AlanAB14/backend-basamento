import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesEmployeeDto } from './create-roles_employee.dto';

export class UpdateRolesEmployeeDto extends PartialType(CreateRolesEmployeeDto) {}
