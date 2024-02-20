// validation-failed.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationFailedException extends HttpException {
  constructor(errors: string[]) {
    super(
      {
        error_description: errors.join(';'),
        data: null,
        error_code: HttpStatus.BAD_REQUEST,
      },
      HttpStatus.OK,
    );
  }
}
