import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterEmployeesWorkDto } from './create-register_employees_work.dto';

export class UpdateRegisterEmployeesWorkDto extends PartialType(CreateRegisterEmployeesWorkDto) {}
