import { Module } from '@nestjs/common';
import { RolesEmployeeService } from './roles_employee.service';
import { RolesEmployeeController } from './roles_employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEmployee } from './entities/roles_employee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RolesEmployee]),
  ],
  controllers: [RolesEmployeeController],
  providers: [RolesEmployeeService],
})
export class RolesEmployeeModule {}
