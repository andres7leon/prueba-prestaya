export interface RegisterModel {
  email: string;
  name: string;
  nit: number;
  password: string;
  loans?: Array<any>;
}
