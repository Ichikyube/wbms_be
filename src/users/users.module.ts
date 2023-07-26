import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { multerOptions } from 'src/settings/multer.config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register(multerOptions)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
