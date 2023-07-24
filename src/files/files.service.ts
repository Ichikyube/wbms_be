import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import hasha from 'hasha';
import { DbService } from 'src/db/db.service';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import fs from 'fs';

export interface IFile {
  readonly fieldname: string;
  readonly originalname: string;
  readonly encoding?: string;
  readonly mimetype: string;
  readonly buffer: Buffer;
  readonly size: number;
}

const upload_dir = __dirname + '/../../uploads';

@Injectable()
export class FilesService {
  constructor(
    private readonly configService: ConfigService,
    private db: DbService,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    if (!file) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            file: 'selectFile',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    // const hash_sum = hasha(file.buffer, { algorithm: 'sha256' });
    const filename = `${uuidv4()}-${file.originalname}`;
    const fileLocation = {
      local: `/${this.configService.get('app.public')}/img/${file.path}`,
      s3: file,
    };
    const filePath = path.resolve(fileLocation.local, filename);

    return await {
      profilePic: file.originalname,
      fileLocation: filePath,
    };
  }
  // public async upload(file: IFile) {
  //   if (!fs.existsSync(upload_dir)) {
  //     fs.mkdirSync(upload_dir);
  //   }

  //   const hash_sum = hasha(file.buffer, { algorithm: 'sha256' });

  //   const file_dir = path.resolve(upload_dir, hash_sum);
  //   const file_name = slugify(file.originalname.toLowerCase());
  //   const full_path = path.resolve(upload_dir, hash_sum, file_name);

  //   if (!fs.existsSync(file_dir)) {
  //     fs.mkdirSync(file_dir);
  //   }

  //   await this.saveFile(full_path, file.buffer);

  //   return `/uploads/${hash_sum}/${file_name}`;
  // }

  // private async saveFile(file_path: string, file: Buffer): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     fs.mkdir(
  //       path.dirname(file_path),
  //       { recursive: true },
  //       (error_mkdir: Error) => {
  //         if (error_mkdir) {
  //           reject(error_mkdir);
  //         }

  //         fs.writeFile(file_path, file, (error_write: Error) => {
  //           if (error_write) {
  //             reject(error_write);
  //           }

  //           resolve();
  //         });
  //       },
  //     );
  //   });
  // }
}
