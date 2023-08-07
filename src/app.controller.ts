import { Controller, Get } from '@nestjs/common';
import { Roles } from './common/decorators';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Attributes')
@Controller('app')
export class AppController {
//   @Roles('Administrator')
  @Get('resourceslist')
  async getAll() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        model: {
          records: [],
          allAttributes: {},
        },
      },
      logs: {},
    };

    try {
      const models = Prisma.dmmf.datamodel.models.map((model) => model.name);
      let schemas = {};
      models.forEach(async (name) => {
        schemas[name] = Prisma.dmmf.datamodel.models
          .find((model) => model.name === name)
          .fields.map((field) => field.name);
      });
      console.log(schemas);

      dataOut.data.model.records = models;
      dataOut.data.model.allAttributes = schemas;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }
}
