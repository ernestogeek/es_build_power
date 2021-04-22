import { HttpException } from './http.exception';

export class UnauthorizedException extends HttpException {
  constructor(message = 'Unauthorized') {
    super(message, 404);
  }
}
