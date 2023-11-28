import { Injectable } from '@nestjs/common';
import { DecodeQrcodeDto } from './dto/decode-qrcode.dto';
import { UpdateSemaiDto } from './dto/update-semai.dto';
import { AxiosService } from './axios.service';

@Injectable()
export class SemaiService {
  constructor(private readonly axiosService: AxiosService) {
    console.log(
      `WBMS_SEMAI_BACKEND_URL: ${this.axiosService.api.defaults.baseURL},`)
  }

  async storageTanks(): Promise<any> {
    const dataOut = {
      status: true,
      message: '',
      data: {
        storageTanks: [],
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .get(`storage-tanks?pageSize=0`)
        .then((res) => res?.data);
      if (!response.success) throw new Error(response?.message);
      dataOut.data.storageTanks = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async products() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        products: [],
      },
      logs: {},
    };
    try {
      const response = await this.axiosService.api
        .get(`products?pageSize=0`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.products = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async sites() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        sites: [],
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .get(`sites?pageSize=0`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.sites = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async transportVehicles() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transportVehicles: [],
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .get(`transport-vehicles?pageSize=0`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transportVehicles = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async transporters() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transporters: [],
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .get(`transporters?pageSize=0`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transporters = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async vehicleOperators() {
    const dataOut = {
      status: true,
      message: '',
      data: {
        vehicleOperators: [],
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .get(`vehicle-operators?pageSize=0`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.vehicleOperators = response.records;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async decodeQrcode(dto: DecodeQrcodeDto) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        decodedQrcode: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/decode-qrcode`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.decodedQrcode = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async encodeQrcode(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        qrcode: {},
      },
      logs: {},
    };

    try {
      const orderId = dto.orderId;
      const functionCode = dto.functionCode;

      console.log(dto);

      const response = await this.axiosService.api
        .get(`cmd/encode-qrcode/${orderId}/${functionCode}`)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.qrcode = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async dispatchDelivery(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      console.log(dto);

      const response = await this.axiosService.api
        .post(`cmd/dispatch-delivery`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async rejectDelivery(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/reject-delivery`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async closeDeliveryCanceled(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/close-delivery-as-canceled`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async closeDeliveryAccepted(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/close-delivery-as-accepted`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async closeDeliveryRejected(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      console.log('data in');
      console.log(dto);

      const response = await this.axiosService.api
        .post(`cmd/close-delivery-as-rejected`, dto)
        .then((res) => res?.data);

      console.log('hasil api close-delivery-as-rejected');
      console.log(response);

      if (!response.success) {
        dataOut.logs = { ...dataOut.logs, response };
        throw new Error(response?.message);
      }

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { ...dataOut.logs, error };
    }

    return dataOut;
  }

  async validateDispatchDelivery(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/validate-dispatch-delivery`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }

  async validateUnloading(dto: any) {
    const dataOut = {
      status: true,
      message: '',
      data: {
        transaction: {},
      },
      logs: {},
    };

    try {
      const response = await this.axiosService.api
        .post(`cmd/validate-unloading`, dto)
        .then((res) => res?.data);

      if (!response.success) throw new Error(response?.message);

      dataOut.data.transaction = response.record;
    } catch (error) {
      dataOut.status = false;
      dataOut.message = error.message;
      dataOut.logs = { error };
    }

    return dataOut;
  }
}
