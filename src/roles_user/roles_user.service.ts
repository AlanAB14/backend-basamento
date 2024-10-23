import { Injectable } from '@nestjs/common';
import { CreateRolesUserDto } from './dto/create-roles_user.dto';
import { UpdateRolesUserDto } from './dto/update-roles_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesUser } from './entities/roles_user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesUserService {

  constructor(
    @InjectRepository(RolesUser)
    private readonly rolesUserRepository: Repository<RolesUser>
  ) { }

  create(createRolesUserDto: CreateRolesUserDto) {
    return this.rolesUserRepository.save(createRolesUserDto);
  }

  findAll() {
    return `This action returns all rolesUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolesUser`;
  }

  update(id: number, updateRolesUserDto: UpdateRolesUserDto) {
    return `This action updates a #${id} rolesUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolesUser`;
  }
}
