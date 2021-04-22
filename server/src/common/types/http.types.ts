import { RoleType, User } from '@prisma/client';
import { Request, Response } from 'express';

export interface HttpContext {
  req: Request;
  res: Response;
}

export interface HttpController {
  router: any;
}
export interface PayloadUserForJwtToken {
  user: UserFromRequest;
}

export interface DataStoredFromToken {
  user: UserFromRequest;
}

export interface UserFromRequest extends Partial<User> {
  id?: string;
  role?: RoleType;
  email?: string;
  username?: string;
  password?: string;
}
export interface SessionAuthToken {
  authToken?: IAuthToken;
}
export interface IAuthToken {
  accessToken?: string;
  refreshToken?: string;
}
