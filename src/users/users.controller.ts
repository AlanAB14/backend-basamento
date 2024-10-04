import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from 'src/files/helpers';
import { diskStorage } from 'multer';
import { FilesService } from 'src/files/files.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly filesService: FilesService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar', {
    fileFilter: fileFilter,
    storage: diskStorage({
      destination: './static/images',
      filename: fileNamer
    })
  }))
  async createUser(
    @Body() createUserDto: any, 
    @UploadedFile() avatar?: Express.Multer.File 
  ) {
    let avatarUrl: string | undefined;
    
    if (avatar) {
      avatarUrl = await this.filesService.uploadImage(avatar);
    }

    const user = await this.usersService.create({ 
      ...createUserDto, 
      avatar: avatarUrl
    });

    return user;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
