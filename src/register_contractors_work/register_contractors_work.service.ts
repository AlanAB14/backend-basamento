import { Injectable } from '@nestjs/common';
import { CreateRegisterContractorsWorkDto } from './dto/create-register_contractors_work.dto';
import { UpdateRegisterContractorsWorkDto } from './dto/update-register_contractors_work.dto';

@Injectable()
export class RegisterContractorsWorkService {
  create(createRegisterContractorsWorkDto: CreateRegisterContractorsWorkDto) {
    return 'This action adds a new registerContractorsWork';
  }

  findAll() {
    return `This action returns all registerContractorsWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerContractorsWork`;
  }

  update(id: number, updateRegisterContractorsWorkDto: UpdateRegisterContractorsWorkDto) {
    return `This action updates a #${id} registerContractorsWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerContractorsWork`;
  }
}
