import { ValidationError } from "./errors/AppError";

export abstract class BaseModel {
    abstract validate(): void;

    abstract toJSON(): Record<string, any>;
}

export function validateRequired(value: any, fieldName: string): void {
    if (value === undefined || value === null || value === '') {
        throw new ValidationError(`${fieldName} is required`);
    }
}