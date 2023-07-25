import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Response,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { multerOptions } from 'src/configs/multer.config';
import { FilesService } from './files.service';
import { Request } from 'express';
@ApiTags('Files')
@Controller({
  path: 'files',
  version: '1',
})
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Req() req: Request) {
    return this.filesService.uploadImage(req.file);
  }
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return console.log(response);
  }
  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, multerOptions),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }
  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
  @Get(':path')
  download(@Param('path') path, @Response() response) {
    return response.sendFile(path, { root: './files' });
  }
}
