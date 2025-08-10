
export abstract class BaseModel {
    abstract validate(): void;

    abstract toJSON(): Record<string, any>;
}

