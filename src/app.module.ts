import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';
import { ConstructionsModule } from './constructions/constructions.module';
import { ContractorsModule } from './contractors/contractors.module';
import { RolesUserModule } from './roles_user/roles_user.module';
import { RolesEmployeeModule } from './roles_employee/roles_employee.module';
import { RegisterEmployeesWorkModule } from './register_employees_work/register_employees_work.module';
import { RegisterContractorsWorkModule } from './register_contractors_work/register_contractors_work.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "user_basamento",
      password: "root",
      database: "db_basamento",
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    UsersModule,
    FilesModule,
    EmployeesModule,
    ConstructionsModule,
    ContractorsModule,
    RolesUserModule,
    RolesEmployeeModule,
    RegisterEmployeesWorkModule,
    RegisterContractorsWorkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
