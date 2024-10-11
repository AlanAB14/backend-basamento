import { Injectable } from '@nestjs/common';
import { CreateRegisterEmployeesWorkDto } from './dto/create-register_employees_work.dto';
import { UpdateRegisterEmployeesWorkDto } from './dto/update-register_employees_work.dto';

@Injectable()
export class RegisterEmployeesWorkService {
  create(createRegisterEmployeesWorkDto: CreateRegisterEmployeesWorkDto) {
    return 'This action adds a new registerEmployeesWork';
  }

  findAll() {
    return `This action returns all registerEmployeesWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerEmployeesWork`;
  }

  update(id: number, updateRegisterEmployeesWorkDto: UpdateRegisterEmployeesWorkDto) {
    return `This action updates a #${id} registerEmployeesWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerEmployeesWork`;
  }
}
