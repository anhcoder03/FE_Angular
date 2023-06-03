export interface ISignin {
  _id?: string;
  email: string;
  password: string;
  success?: boolean;
  message?: string;
  user?: Object;
  accessToken?: string | undefined;
}
export interface ISignup {
  _id?: string;
  fullname: string;
  email: string;
  password: string;
  confirmPassword?: string;
  success?: boolean;
  message?: string;
}

export interface IUser {
  message?: string;
  _id?: string;
  fullname: string;
  email: string;
  password?: string;
  avatar?: string;
  admin?: boolean;
  success?: boolean;
  data?: any;
  status?: string;
}
