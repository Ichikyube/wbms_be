Verify Users
Access the openldap container:
ldapsearch -x -LLL -D "cn=admin,dc=wbms,dc=dsn" -w admin -b "dc=wbms,dc=dsn" -s sub "(objectClass=*)"
docker-dsnpose exec openldap bash
openssl s_client -connect wbms.dsn:389 -starttls ldap -showcerts
You can use ldapsearch to verify our user:
ldapsearch -x -h openldap -D "uid=ruan,ou=people,dc=wbms,dc=org" -b "ou=people,dc=wbms,dc=org" -w "$PASSWORD" -s base 'uid=ruan'
Or we can use ldapwhoami:
ldapwhoami -vvv -h ldap://openldap:389 -p 389 -D 'uid=ruan,ou=people,dc=wbms,dc=org' -x -w "$PASSWORD"

ldapadd -W -H ldap://openldap -D 'cn=admin,dc=wbms,dc=dsn' <<LDIF
LDIF
ldapadd -x -D 'cn=admin,dc=wbms,dc=dsn' -w admin -h ldap://openldap:389 -p 389  -f  '/assets/openldap/custom/ldif/bootstrap.ldif'
ldapsearch -x -h ldap://openldap:389 -p 389  -D "cn=admin,dc=wbms,dc=dsn"  -w admin -s base 'dc=wbms,dc=dsn'

import {
Injectable,
NestInterceptor,
ExecutionContext,
CallHandler,
} from '@nestjs/dsnmon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
statusCode: number;
message: string;
data: T;
}

@Injectable()
export class TransformInterceptor<T>
implements NestInterceptor<T, Response<T>>
{
intercept(
context: ExecutionContext,
next: CallHandler
): Observable<Response<T>> {
return next.handle().pipe(
map((data) => ({
statusCode: context.switchToHttp().getResponse().statusCode,
reqId: context.switchToHttp().getRequest().reqId,
message: data.message || '',
data: data,
}))
);
}
}
export const permission = [
  'read:own',
  'create:own',
  'update:own',
  'delete:own',
  'read:any',
  'create:any',
  'update:any',
  'delete:any',
] as const;

import { Observable } from 'rxjs';

function listenForEvents(element, eventName) {
  return new Observable(subscriber => {
    // Create an event handler
    const handler = event => {
      subscriber.next(event);
    };

    // Attach the event handler
    element.addEventListener(eventName, handler);

    // Return a cleanup function
    return () => {
      // Detach the event handler
      element.removeEventListener(eventName, handler);
    };
  });
}



    // WbTransactionUrlMapping() {
  //   // 4:15 harus dirubah, ini sementara, status ini tidak valid, seharusnya 4:20
  //   const urlMapping = {
  //     1: {
  //       1: {
  //         0: '/wb/pks-transaction/normal',
  //         15: '/wb/pks-transaction/cancel',
  //       },
  //       3: {
  //         10: '/wb/pks-transaction/normal',
  //         15: '/wb/pks-transaction/cancel',
  //       },
  //       4: {
  //         15: '/wb/pks-transaction/cancel',
  //         20: '/wb/pks-transaction/cancel',
  //       },
  //       5: { 23: '/wb/pks-transaction/reject' },
  //     },
  //     2: {
  //       1: { 0: '/wb/t30-transaction/normal' },
  //       4: { 20: '/wb/t30-transaction/cancel' },
  //     },
  //     3: {
  //       4: { 20: '/wb/bulking-transaction/normal' },
  //     },
  //   };

  //   return urlMapping;
  // }

  // TransactionValidation() {
  //   // 4:15 harus dirubah, ini sementara, status ini tidak valid, seharusnya 4:20
  //   const statusMapping = {
  //     1: {
  //       1: {
  //         0: 'pks-normal',
  //         15: 'pks-cancel',
  //       },
  //       3: {
  //         10: 'pks-normal',
  //         15: 'pks-cancel',
  //       },
  //       4: {
  //         15: 'pks-cancel',
  //         20: 'pks-cancel',
  //       },
  //       5: { 23: 'pks-reject' },
  //     },
  //     2: {
  //       1: { 0: '/wb/t30-transaction/normal' },
  //       4: { 20: '/wb/t30-transaction/cancel' },
  //     },
  //     3: {
  //       4: { 20: '/wb/bulking-transaction/normal' },
  //     },
  //   };

  //   return statusMapping;
  // }

async function authenticate(username: string, password: string) {
  const client = ldap.createClient({
    url: process.env.LDAP_HOST as string,
  });

  const entries: ldap.SearchEntry[] = [];

  return new Promise((resolve, reject) => {
    client.bind(
      process.env.LDAP_DN as string,
      process.env.LDAP_PASSWORD as string,
      (error) => {
        if (error) {
          reject('LDAP bound failed');
        } else {
          const opts: ldap.SearchOptions = {
            filter: `(&(sAMAccountName=${username}))`,
            scope: 'sub',
            attributes: ['dn', 'sn', 'cn', 'sAMAccountName'],
          };

          client.search(
            process.env.LDAP_BASE_DN as string,
            opts,
            (err, res) => {
              if (err) {
                reject(`User ${username} LDAP search error`);
              } else {
                res.on('searchRequest', (searchRequest) => {
                  //console.log('searchRequest: ', searchRequest.messageID);
                });
                res.on('searchEntry', (entry) => {
                  entries.push(entry);

                  client.bind(entry.dn, password, (err, res) => {
                    if (err) {
                      reject(`User ${username} username or password problem`);
                    } else {
                      resolve({
                        username,
                        password,
                      });
                    }
                  });
                });
                res.on('searchReference', (referral) => {
                  //console.log('referral: ' + referral.uris.join());
                });
                res.on('error', (err) => {
                  reject('LDAP SEARCH error');
                });
                res.on('end', (result) => {
                  if (entries.length == 0) {
                    reject(`User ${username} username or password problem`);
                  }
                });
              }
            }
          );
        }
      }
    );
  });
}








sse
@Service
@Primary
@AllArgsConstructor
@Slf4j
public class SseNotificationService implements NotificationService {
 
   private final EmitterRepository emitterRepository;
   private final EventMapper eventMapper;
 
   @Override
   public void sendNotification(String memberId, EventDto event) {
       if (event == null) {
           log.debug("No server event to send to device.");
           return;
       }
       doSendNotification(memberId, event);
   }
 
   private void doSendNotification(String memberId, EventDto event) {
       emitterRepository.get(memberId).ifPresentOrElse(sseEmitter -> {
           try {
               log.debug("Sending event: {} for member: {}", event, memberId);
               sseEmitter.send(eventMapper.toSseEventBuilder(event));
           } catch (IOException | IllegalStateException e) {
               log.debug("Error while sending event: {} for member: {} - exception: {}", event, memberId, e);
               emitterRepository.remove(memberId);
           }
       }, () -> log.debug("No emitter for member {}", memberId));
   }
}

@Slf4j
@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {
   public static final String MEMBER_ID_HEADER = "MemberId";
 
   private final EmitterService emitterService;
   private final NotificationService notificationService;
 
   @GetMapping
   public SseEmitter subscribeToEvents(@RequestHeader(name = MEMBER_ID_HEADER) String memberId) {
       log.debug("Subscribing member with id {}", memberId);
       return emitterService.createEmitter(memberId);
   }
 
   @PostMapping
   @ResponseStatus(HttpStatus.ACCEPTED)
   public void publishEvent(@RequestHeader(name = MEMBER_ID_HEADER) String memberId, @RequestBody EventDto event) {
       log.debug("Publishing event {} for member with id {}", event, memberId);
       notificationService.sendNotification(memberId, event);
   }
}










@GetMapping("/sse-emitter")
public SseEmitter sseEmitter() {
   SseEmitter emitter = new SseEmitter();
   Executors.newSingleThreadExecutor().execute(() -> {
       try {
           for (int i = 0; true; i++) {
               SseEmitter.SseEventBuilder event = SseEmitter.event()
                       .id(String.valueOf(i))
                       .name("SSE_EMITTER_EVENT")
                       .data("SSE EMITTER - " + LocalTime.now().toString());
               emitter.send(event);
               Thread.sleep(1000);
           }
       } catch (Exception ex) {
           emitter.completeWithError(ex);
       }
   });
   return emitter;
}


GetMapping("/sse-flux-2")
public Flux<ServerSentEvent> sseFlux2() {
   return Flux.interval(Duration.ofSeconds(1))
           .map(sequence -> ServerSentEvent.builder()
                   .id(String.valueOf(sequence))
                   .event("EVENT_TYPE")
                   .data("SSE - " + LocalTime.now().toString())
                   .build());
}




import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  notificationEvents: Record<string, Subject<any>> = {}
  async handleConnection(id: string) {
    if (!this.notificationEvetnts[id]) {
      this.notificationEvents[id] = new Subject();
    }
    setInterval(() => {
      this.notificationEvents[id].next({ data: { message: 'Hello World' } });
    }, 1000);
    return this.notificationEvent[id].asObservable();
  }
}

@Sse('notifications/:id')
sendNotification(@Param() { id }: record<string, string>): Observable<any> {
  // no need to make this async or return a Promise. Observables are handled just fine as they are
  return this.notificationService.handleConnection(id);
}




import {
  Controller,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiFile } from './api-file.decorator';
import { FilesService } from './files.service';
import { fileMimetypeFilter } from './file-mimetype-filter';

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @ApiFile('avatar', true, { fileFilter: fileMimetypeFilter('image') }) 
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

    @Post('avatar')
  @ApiImageFile('avatar', true)
  uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  
  @Post('document')
  @ApiPdfFile('document', true)
  uploadDocument(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}



export class UploadController {

}


let formData = new FormData();
files.forEach((file) => {
  formData.append('files', file, file.name);
});
  ```



const fs = require('fs');
const path = require('path');

const swaggerUIPath = path.resolve(__dirname, 'path_to_your_swagger_ui_folder'); // Replace with the actual path

// Read the index.html file from Swagger UI
const indexHtml = fs.readFileSync(path.join(swaggerUIPath, 'index.html'), 'utf-8');

// Write the HTML file to a different location
fs.writeFileSync(path.join(__dirname, 'exported_swagger.html'), indexHtml);

console.log('Swagger UI exported successfully.');
npm install @nestjs/platform-socket.io socket.io

'



  async createUser(data: Prisma.UserCreateInput, profilePictureFile?: MulterFile): Promise<User> {
    if (profilePictureFile) {
      // Save the profile picture to a directory on the server
      const profilePicturePath = await this.saveProfilePicture(profilePictureFile);
      data.profilePicture = profilePicturePath;
    }

    return this.prisma.user.create({
      data,
    });
  }

  private async saveProfilePicture(file: MulterFile): Promise<string> {
    const fileExt = path.extname(file.originalname);
    const randomName = new Date().getTime().toString();
    const newFileName = `${randomName}${fileExt}`;

    // Define the directory where the profile pictures will be stored
    const uploadDirectory = path.join(__dirname, '../../uploads/profilePictures');

    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    const filePath = path.join(uploadDirectory, newFileName);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, file.buffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(filePath);
        }
      });
    });
  }


    @Post()
  @UseInterceptors(FileInterceptor('profilePicture')) // 'profilePicture' is the field name for the uploaded file
  async createUser(
    @Body() data: Prisma.UserCreateInput,
    @UploadedFile() profilePictureFile?: Express.Multer.File,
  ): Promise<User> {
    return this.usersService.createUser(data, profilePictureFile);
  }



  // file-upload.module.ts

import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/profilePictures', // Directory where the uploaded files will be saved
        filename: (req, file, cb) => {
          const randomName = new Date().getTime().toString();
          const fileExt = path.extname(file.originalname);
          cb(null, `${randomName}${fileExt}`);
        },
      }),
    }),
  ],
  exports: [MulterModule],
})
export class FileUploadModule {}


// file-upload.middleware.ts

import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';

export const FileUploadOptions: MulterOptions = {
  storage: diskStorage({
    destination: './uploads', // Directory where the uploaded files will be saved
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  }),
};


// upload.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { Prisma, UploadedFile } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { FileUploadOptions } from '../file-upload/file-upload.middleware';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadImage(file: UploadedFile): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file uploaded.');
    }

    // Generate a unique filename using UUID
    const filename = uuidv4() + '-' + file.originalname;

    // Create the uploads directory if it doesn't exist
    const uploadDirectory = './uploads';
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    // Save the file to the uploads directory
    const filePath = `${uploadDirectory}/${filename}`;
    fs.writeFileSync(filePath, file.buffer);

    // Save the file path in the database using Prisma
    await this.prisma.image.create({
      data: { path: filePath },
    });

    return filePath;
  }
}


// file-upload.utils.ts
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';

export const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new BadRequestException('Unsupported file type'), false);
  }
};

export const editFileName = (req, file, callback) => {
  const fileExtName = extname(file.originalname);
  const randomName = uuidv4();
  callback(null, `${randomName}${fileExtName}`);
};

export const uploadOptions = {
  storage: diskStorage({
    destination: './uploads', // Specify your desired upload directory here
    filename: editFileName,
  }),
  fileFilter,
};



const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('Client connected');
  
  // Send SSE-like data to the client every second
  const interval = setInterval(() => {
    socket.emit('sse', { message: 'Hello from server' });
  }, 1000);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

server.listen(8080);
