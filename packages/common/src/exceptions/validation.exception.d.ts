import { HttpException, HttpExceptionOptions, ValidationError } from '@nestjs/common';
export declare class ValidationException extends HttpException {
    constructor(validErrors: ValidationError[], options?: HttpExceptionOptions);
}
