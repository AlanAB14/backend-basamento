import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
