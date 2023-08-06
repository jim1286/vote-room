export class HttpResponse {
  code: number;
  message: string;
  data: any;

  constructor(data: any) {
    this.code = 200;
    this.message = "success";
    this.data = data;
  }
}
