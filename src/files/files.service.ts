import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {

  constructor(private readonly configService: ConfigService) {}


  getStaticImage(imageName: string) {
    const path = join(__dirname, '../../static/images', imageName);

    if (!existsSync(path))
      throw new BadRequestException(`No image found - ${imageName}`);

    return path;
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new BadRequestException('File is not valid');
    }

    const secureUrl = `${this.configService.get('HOST_API')}/files/image/${file.filename}`;
    return secureUrl;
  }

}
