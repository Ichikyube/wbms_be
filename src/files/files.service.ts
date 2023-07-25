// upload.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { DbService } from 'src/db/db.service';
import { ImageEntity } from './files.entity';

@Injectable()
export class FilesService {
  constructor(private readonly db: DbService) {}

  async uploadImage(file: {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
  }): Promise<ImageEntity> {
    if (!file) {
      throw new BadRequestException('No file uploaded.');
    }
    console.log(file)
    // Save the file path in the database using Prisma
    return await this.db.image.create({
        data: { path: file.filename },
      });
  }
}
