import { Module } from '@nestjs/common';
import { RegisterEmployeesWorkService } from './register_employees_work.service';
import { RegisterEmployeesWorkController } from './register_employees_work.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEmployeesWork } from './entities/register_employees_work.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterEmployeesWork]),
  ],
  controllers: [RegisterEmployeesWorkController],
  providers: [RegisterEmployeesWorkService],
})
export class RegisterEmployeesWorkModule {}
