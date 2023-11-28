import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import { Injectable, Req } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { resolve } from 'path';
import * as https from 'https';
import * as fs from 'fs';
import { exec } from 'child_process';
import { WBMS_SEMAI_DOMAIN, WBMS_SEMAI_BACKUP_DOMAIN } from './config';
import { Request, Response } from 'express';
import { throwError } from 'rxjs';

@Injectable()
export class AxiosService {
  constructor(private config: ConfigService) {
    console.log(resolve(this.WBMS_SEMAI_CERT));
  }
  refetch = false;
  switchedDomain = false;
  WBMS_SEMAI_API_KEY = this.config.get('WBMS_SEMAI_API_KEY');
  WBMS_SEMAI_CERT = this.config.get('WBMS_SEMAI_CERT');
  WBMS_SEMAI_KEY = this.config.get('WBMS_SEMAI_KEY');

  httpsAgent = new https.Agent({
    cert: fs.readFileSync(resolve(this.WBMS_SEMAI_CERT)),
    key: fs.readFileSync(resolve(this.WBMS_SEMAI_KEY)),
    rejectUnauthorized: false,
  });

  public readonly api = this.createApi(WBMS_SEMAI_DOMAIN);

  public createApi(domain: string) {
    return axios.create({
      baseURL: this.constructUrl(domain),
      httpsAgent: this.httpsAgent,
      headers: {
        'x-api-key': this.WBMS_SEMAI_API_KEY,
      },
    });
  }
  private constructUrl(domain: string) {
    return `https://${domain}/api/external-channel/`;
  }

  // This function will be used to switch to the backup URL
  public switchDomain() {
    const filePath = resolve(__dirname, `../src/semai/config.ts`);
    const config = `export const WBMS_SEMAI_DOMAIN = '${WBMS_SEMAI_BACKUP_DOMAIN}';\nexport const WBMS_SEMAI_BACKUP_DOMAIN = '${WBMS_SEMAI_DOMAIN}';`;
    return fs.writeFileSync(filePath, config);
  }

  public resetConfig() {
    const filePath = resolve(__dirname, `../src/semai/config.ts`);
    const config = `export const WBMS_SEMAI_DOMAIN = 'host.docker.internal';\nexport const WBMS_SEMAI_BACKUP_DOMAIN = '${this.config.get(
      'SEMAI.BACKUPDOMAIN',
    )}';`;
    return fs.promises.writeFile(filePath, config);
  }

  public async switchUrl(req: Request) {
    const url = req.url.split('/')[3];
    return this.constructUrl(WBMS_SEMAI_DOMAIN) + url;
  }

  public async switchUrlAndRefetch() {
    axiosRetry(this.api, {
      retries: 5, // number of retries
      retryDelay: (retryCount) => {
        return retryCount * 600; // time interval between retries
      },
      onRetry: (retryCount) => {
        this.refetch = true;
        console.log(`retry attempt: ${retryCount}`);
        return retryCount * 300;
      },
      retryCondition: (error) => {
        // console.log(error);
        console.log(error.code);
        if (error.code === 'ENOTFOUND' || error.response.status === 503) {
          error.config.baseURL = this.constructUrl(WBMS_SEMAI_BACKUP_DOMAIN);
          this.switchedDomain = true;
          return true; //refetch
        } else if (error.code === 'ETIMEDOUT') return true;
        return false;
      },
    });
    // this.api.interceptors.response.use((response) => {
    //   // if (this.refetch === true) this.switchDomain();
    //   return response;
    // });
  }
}
