import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { ConfigService } from '@nestjs/config';
import { fileFilter, fileNamer } from './helpers';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('image/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string
  ) {

    const path = this.filesService.getStaticImage( imageName );

    res.sendFile( path );
  }



  @Post('image')
  @UseInterceptors( FileInterceptor('file', {
    fileFilter: fileFilter,
    // limits: { fileSize: 1000 }
    storage: diskStorage({
      destination: './static/images',
      filename: fileNamer
    })
  }) )
  uploadImage( 
    @UploadedFile() file: Express.Multer.File,
  ){
    if ( !file ) {
      throw new BadRequestException('Make sure that the file is an image');
    }

    // const secureUrl = `${ file.filename }`;
    const secureUrl = `${ this.configService.get('HOST_API') }/files/image/${ file.filename }`;
    return { secureUrl };
  }

}
