import { Module } from '@nestjs/common';
import { RolesUserService } from './roles_user.service';
import { RolesUserController } from './roles_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesUser } from './entities/roles_user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RolesUser]),
  ],
  controllers: [RolesUserController],
  providers: [RolesUserService],
  exports: [TypeOrmModule]
})
export class RolesUserModule {}
