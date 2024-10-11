import { Injectable } from '@nestjs/common';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';

@Injectable()
export class ConstructionsService {
  create(createConstructionDto: CreateConstructionDto) {
    return 'This action adds a new construction';
  }

  findAll() {
    return `This action returns all constructions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} construction`;
  }

  update(id: number, updateConstructionDto: UpdateConstructionDto) {
    return `This action updates a #${id} construction`;
  }

  remove(id: number) {
    return `This action removes a #${id} construction`;
  }
}
