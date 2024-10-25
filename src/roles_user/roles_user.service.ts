import { BadRequestException, Injectable } from '@nestjs/common';
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

  async create(createRolesUserDto: CreateRolesUserDto) {
    const role = await this.rolesUserRepository.findOne({ where: {role: createRolesUserDto.role }})
    if (role) {
      throw new BadRequestException(`Role ${ createRolesUserDto.role } exist`);
    }
    return await this.rolesUserRepository.save(createRolesUserDto);
  }

  async findAll() {
    return await this.rolesUserRepository.find()
  }

  async findOne(id: number) {
    const rol = await this.rolesUserRepository.findOneBy({ id });

    if (!rol) {
      throw new BadRequestException('Rol not found');
    }
    return rol;
  }

  async update(id: number, updateRolesUserDto: UpdateRolesUserDto) {
    const roleName = await this.rolesUserRepository.findOne({ where: {role: updateRolesUserDto.role }})
    
    if (roleName) {
      throw new BadRequestException(`Role ${ updateRolesUserDto.role } exist`);
    }

    const rol = await this.findOne(id);
    if (!rol) {
      throw new BadRequestException('Rol not found');
    }
    return await this.rolesUserRepository.update(id, updateRolesUserDto);
  }

  async remove(id: number) {
    return await this.rolesUserRepository.delete({ id });
  }
}
