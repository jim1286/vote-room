import { ResponseCode } from "@/interface";

export class Response {
  code: number;
  message: string;
  result?: any;

  constructor(responseCode: ResponseCode) {
    this.code = responseCode.code;
    this.message = responseCode.message;
  }

  data(data: any) {
    this.result = data;
    return this;
  }

  toJson() {
    return {
      code: this.code,
      message: this.message,
      data: this.result,
    };
  }
}
