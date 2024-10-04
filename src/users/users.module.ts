import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FilesModule } from 'src/files/files.module';
import { FilesService } from 'src/files/files.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    FilesModule,
    ConfigModule
  ],
  controllers: [UsersController],
  providers: [UsersService, FilesService],
  exports: [UsersService]
})
export class UsersModule {}
