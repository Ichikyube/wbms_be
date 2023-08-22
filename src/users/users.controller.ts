import {
  Controller,
  Get,
  UseGuards,
  Req,
  Body,
  Param,
  Post,
  Delete,
  Patch,
  HttpStatus,
  HttpCode,
  UploadedFile,
  UseInterceptors,
  Res,
  Sse,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';

import { UsersService } from './users.service';
import { AtGuard } from 'src/common/guards';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable, interval, map } from 'rxjs';

@ApiTags('Users')
// @ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('iam')
  async getIAM(@Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: null,
      },
      logs: {},
    };
    try {
      const user = await this.usersService.getIAM(req.user['sub']);

      const { name, profilePic, division, position, phone, alamat } =
        user.profile;
      const { username, email } = user;
      dataOut.data.user = {
        username,
        email,
        name,
        profilePic,
        division,
        position,
        phone,
        alamat,
      };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }
    return dataOut;
  }

  // @Sse('sse')
  // sse(): Observable<MessageEvent> {
  //   return interval(1000).pipe(
  //     map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
  //   );
  // }

  @Get()
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'own',
  })
  @ApiOperation({ summary: 'Lists of users' })
  @HttpCode(HttpStatus.OK)
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: {
          page: 0,
          totalRecords: 0,
          records: [],
        },
      },
      logs: {},
    };

    try {
      const users = await this.usersService.getAll();

      dataOut.data.user.totalRecords = users.length;
      dataOut.data.user.records = users;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get('attr')
  @UseRoles({
    resource: 'citiesData',
    action: 'read',
    possession: 'own',
  })
  async getAttributes() {
    return await this.usersService.getAttributes();
  }

  @Get('deleted')
  @UseRoles({
    resource: 'usersData',
    action: 'delete',
    possession: 'own',
  })
  async getAllDeleted() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: {
          page: 0,
          totalRecords: 0,
          records: [],
        },
      },
      logs: {},
    };

    try {
      dataOut.data.user.records = await this.usersService.getAllDeleted();
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get(':id')
  @UseRoles({
    resource: 'usersData',
    action: 'delete',
    possession: 'own',
  })
  async getById(@Param('id') userId: string) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: {
          page: 0,
          totalRecords: 0,
          records: [],
        },
      },
      logs: {},
    };

    try {
      const user = await this.usersService.getById(userId);

      const { name, profilePic, division, position, phone, alamat } =
        user.profile;
      const { username, email } = user;

      dataOut.data.user.records.push({
        username,
        email,
        name,
        profilePic,
        division,
        position,
        phone,
        alamat,
      });
      dataOut.data.user.totalRecords = 1;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Post('search-first')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'own',
  })
  searchFirst(@Body() query: any) {
    return this.usersService.searchFirst(query);
  }

  @Post('search-many')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'own',
  })
  searchMany(@Body() query: any) {
    return this.usersService.searchMany(query);
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'own',
  })
  searchFirstDeleted(@Body() query: any) {
    return this.usersService.searchFirstDeleted(query);
  }

  @Post('search-many-deleted')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'own',
  })
  searchDeleted(@Body() query: any) {
    return this.usersService.searchManyDeleted(query);
  }

  @Post()
  @UseRoles({
    resource: 'usersData',
    action: 'create',
    possession: 'own',
  })
  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ description: 'User has been successfully created' })
  @ApiBadRequestResponse({
    description: 'Some character error or type error',
  })
  @ApiForbiddenResponse({
    description: 'User already exists',
  })
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: null,
      },
      logs: {},
    };

    try {
      const userId = ''; //req.user['id'];
      console.log(dto.isLDAPUser);
      const user = await this.usersService.create(dto, file, userId);
      console.log(user);
      const { name, profilePic, division, position, phone, alamat } =
        user.profile;
      const { username, email } = user;
      dataOut.data.user = {
        username,
        email,
        name,
        profilePic,
        division,
        position,
        phone,
        alamat,
      };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  async updateUserRole(
    @Param('id') userId: string,
    @Param('id') roleId: number,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: null,
      },
      logs: {},
    };

    try {
      const user = await this.usersService.updateUserRole(userId, roleId);

      const { name, profilePic, division, position, phone, alamat } =
        user.profile;
      const { username, email } = user;
      dataOut.data.user = {
        username,
        email,
        name,
        profilePic,
        division,
        position,
        phone,
        alamat,
      };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: roleId, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'usersData',
    action: 'update',
    possession: 'own',
  })
  @ApiOperation({
    summary: 'Update a user',
  })
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ description: 'User has been successfully updated' })
  @ApiBadRequestResponse({
    description: 'Some character error or type error',
  })
  @UseInterceptors(FileInterceptor('file'))
  async updateById(
    @Param('id') userId: string,
    @Body() dto: UpdateUserDto,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: null,
      },
      logs: {},
    };
    const user = await this.usersService.updateById(userId, dto, file, userId);
    try {
      const user = await this.usersService.updateById(
        userId,
        dto,
        file,
        userId,
      );

      const { name, profilePic, division, position, phone, alamat } =
        user.profile;
      const { username, email } = user;
      dataOut.data.user = {
        username,
        email,
        name,
        profilePic,
        division,
        position,
        phone,
        alamat,
      };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'usersData',
    action: 'delete',
    possession: 'own',
  })
  async deleteById(@Param('id') id: string, @Req() req: Request) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        user: null,
      },
      logs: {},
    };

    try {
      const userId = ''; // req.user['id'];
      const user = await this.usersService.deleteById(id, userId);

      const { username, nik, email, isDisabled, isDeleted } = user;

      dataOut.data.user = { username, email, nik, isDisabled, isDeleted };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqParams: { id }, error };
    }

    return dataOut;
  }
}
