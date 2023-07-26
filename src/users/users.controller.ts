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
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';

import { UsersService } from './users.service';
import { AtGuard } from 'src/common/guards';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UseRoles } from 'nest-access-control';
import { multerOptions } from 'src/configs/multer.config';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('iam')
  @UseRoles({
    resource: 'user',
    action: 'read',
    possession: 'own',
  })
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
      const user = await this.usersService.getIAM(req.user['id']);

      const { username, email, name, division, position, phone } = user;

      dataOut.data.user = { username, email, name, division, position, phone };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  @Get()
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'any',
  })
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

  @Get('deleted')
  @UseRoles({
    resource: 'usersData',
    action: 'delete',
    possession: 'any',
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
    resource: 'user',
    action: 'delete',
    possession: 'any',
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

      const { username, email, name, division, position, phone } = user;

      dataOut.data.user.records.push({
        username,
        email,
        name,
        division,
        position,
        phone,
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
    resource: 'user',
    action: 'read',
    possession: 'any',
  })
  searchFirst(@Body() query: any) {
    return this.usersService.searchFirst(query);
  }

  @Post('search-many')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'any',
  })
  searchMany(@Body() query: any) {
    return this.usersService.searchMany(query);
  }

  @Post('search-first-deleted')
  @UseRoles({
    resource: 'user',
    action: 'read',
    possession: 'any',
  })
  searchFirstDeleted(@Body() query: any) {
    return this.usersService.searchFirstDeleted(query);
  }

  @Post('search-many-deleted')
  @UseRoles({
    resource: 'usersData',
    action: 'read',
    possession: 'any',
  })
  searchDeleted(@Body() query: any) {
    return this.usersService.searchManyDeleted(query);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @UseRoles({
    resource: 'user',
    action: 'create',
    possession: 'any',
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
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() dto: CreateUserDto,
    @UploadedFile('image') file,
    @Req() req: Request,
  ) {
    console.log(file)
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

      const user = await this.usersService.create(dto, file, userId);

      const { username, email, name, division, position, phone } = user;

      dataOut.data.user = { username, email, name, division, position, phone };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Patch(':id')
  @UseRoles({
    resource: 'user',
    action: 'update',
    possession: 'own',
  })
  async updateById(
    @Param('id') userId: string,
    @Body() dto: UpdateUserDto,
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
      const user = await this.usersService.updateById(userId, dto, userId);

      const { username, email, name, division, position, phone } = user;

      dataOut.data.user = { username, email, name, division, position, phone };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqBody: dto, error };
    }

    return dataOut;
  }

  @Delete(':id')
  @UseRoles({
    resource: 'user',
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

      const { username, email, name, isDisabled, isDeleted } = user;

      dataOut.data.user = { username, email, name, isDisabled, isDeleted };
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, reqParams: { id }, error };
    }

    return dataOut;
  }
}
