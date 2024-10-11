import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterEmployeesWorkService } from './register_employees_work.service';
import { CreateRegisterEmployeesWorkDto } from './dto/create-register_employees_work.dto';
import { UpdateRegisterEmployeesWorkDto } from './dto/update-register_employees_work.dto';

@Controller('register-employees-work')
export class RegisterEmployeesWorkController {
  constructor(private readonly registerEmployeesWorkService: RegisterEmployeesWorkService) {}

  @Post()
  create(@Body() createRegisterEmployeesWorkDto: CreateRegisterEmployeesWorkDto) {
    return this.registerEmployeesWorkService.create(createRegisterEmployeesWorkDto);
  }

  @Get()
  findAll() {
    return this.registerEmployeesWorkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerEmployeesWorkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterEmployeesWorkDto: UpdateRegisterEmployeesWorkDto) {
    return this.registerEmployeesWorkService.update(+id, updateRegisterEmployeesWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerEmployeesWorkService.remove(+id);
  }
}
