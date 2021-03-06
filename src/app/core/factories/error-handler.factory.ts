import { ErrorHandler } from '@angular/core';
import { SimpleErrorHandler } from '../error.handler';

// configurations
import { ErrorHandlerTypes } from './error-handler.type';
import { environment } from '../../../environments/environment';

export function errorHandlerFactory(): ErrorHandler {
    switch (environment.apiConfig.errorHandler) {
        case ErrorHandlerTypes.SIMPLE:
            return new SimpleErrorHandler();
        default:
            return new SimpleErrorHandler();
    }
}
