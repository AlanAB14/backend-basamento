import { Module } from '@nestjs/common';
import { RegisterContractorsWorkService } from './register_contractors_work.service';
import { RegisterContractorsWorkController } from './register_contractors_work.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterContractorsWork } from './entities/register_contractors_work.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterContractorsWork]),
  ],
  controllers: [RegisterContractorsWorkController],
  providers: [RegisterContractorsWorkService],
})
export class RegisterContractorsWorkModule {}
