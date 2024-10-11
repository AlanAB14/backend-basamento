import { Module } from '@nestjs/common';
import { ConstructionsService } from './constructions.service';
import { ConstructionsController } from './constructions.controller';
import { Construction } from './entities/construction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Construction]),
  ],
  controllers: [ConstructionsController],
  providers: [ConstructionsService],
})
export class ConstructionsModule {}
