import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstructionsService } from './constructions.service';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';

@Controller('constructions')
export class ConstructionsController {
  constructor(private readonly constructionsService: ConstructionsService) {}

  @Post()
  create(@Body() createConstructionDto: CreateConstructionDto) {
    return this.constructionsService.create(createConstructionDto);
  }

  @Get()
  findAll() {
    return this.constructionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.constructionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstructionDto: UpdateConstructionDto) {
    return this.constructionsService.update(+id, updateConstructionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constructionsService.remove(+id);
  }
}
