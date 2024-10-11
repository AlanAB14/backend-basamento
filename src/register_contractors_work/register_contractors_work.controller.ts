import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterContractorsWorkService } from './register_contractors_work.service';
import { CreateRegisterContractorsWorkDto } from './dto/create-register_contractors_work.dto';
import { UpdateRegisterContractorsWorkDto } from './dto/update-register_contractors_work.dto';

@Controller('register-contractors-work')
export class RegisterContractorsWorkController {
  constructor(private readonly registerContractorsWorkService: RegisterContractorsWorkService) {}

  @Post()
  create(@Body() createRegisterContractorsWorkDto: CreateRegisterContractorsWorkDto) {
    return this.registerContractorsWorkService.create(createRegisterContractorsWorkDto);
  }

  @Get()
  findAll() {
    return this.registerContractorsWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerContractorsWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterContractorsWorkDto: UpdateRegisterContractorsWorkDto) {
    return this.registerContractorsWorkService.update(+id, updateRegisterContractorsWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerContractorsWorkService.remove(+id);
  }
}
