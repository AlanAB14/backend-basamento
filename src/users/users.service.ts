import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';
import { RolesUser } from 'src/roles_user/entities/roles_user.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(RolesUser)
    private readonly rolesUserRepository: Repository<RolesUser>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const role = await this.rolesUserRepository.findOne({
      where: { id: createUserDto.role_id }
    });

    if (!role) {
      throw new BadRequestException('Role not found');
    }

    return await this.userRepository.save({
      ...createUserDto,
      password: await bcryptjs.hash(createUserDto.password, 10),
      role_id: role
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email })
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (updateUserDto.role_id) {
      const role = await this.rolesUserRepository.findOne({ where: { id: updateUserDto.role_id } });
      if (!role) {
        throw new BadRequestException('Role not found');
      }
      user.role_id = role; 
    }

    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepository.softDelete({ id });
  }
}
