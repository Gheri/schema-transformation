export class AppError extends Error {
  public code?: string; 
  public details?: any; 

  constructor(message: string, code?: string, details?: any) {
    super(message);

    this.name = this.constructor.name;

    if (code) this.code = code;
    if (details) this.details = details;
  }
}

export class ProviderAdapterNotFound extends AppError {
    constructor(message: string, details?: any) {
        super(message, "PROVIDER_ADAPTER_NOT_FOUND", details)
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: any) {
        super(message, "VALIDATION_ERROR", details)
    }
}

export class InValidUserError extends AppError {
    constructor(message: string, details?: any) {
        super(message, "INVALID_USER_ERROR", details)
    }
}
