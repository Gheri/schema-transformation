import { BaseModel, validateRequired } from "../../BaseModel";

export class User implements BaseModel {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public createdAt!: Date;
    public createdBy!: string;
    public modifiedAt!: Date;
    public modifiedBy!: string;

    constructor(builder: UserBuilder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.createdAt = builder.createdAt;
        this.createdBy = builder.createdBy;
        this.modifiedAt = builder.modifiedAt;
        this.modifiedBy = builder.modifiedBy;
    }

    validate(): void {
        validateRequired(this.id, 'id');
        validateRequired(this.firstName, 'firstName');
        validateRequired(this.lastName, 'lastName');
        validateRequired(this.createdAt, 'createdAt');
        validateRequired(this.createdBy, 'createdBy');
        validateRequired(this.modifiedAt, 'modifiedAt');
        validateRequired(this.modifiedBy, 'modifiedBy');
    }

    toJSON(): Record<string, any> {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            createdAt: this.createdAt.toISOString(),
            createdBy: this.createdBy,
            modifiedAt: this.modifiedAt.toISOString(),
            modifiedBy: this.modifiedBy
        };
    }

    static fromJSON(json: any): User {
        return new UserBuilder()
            .setId(json.id)
            .setFirstName(json.firstName)
            .setLastName(json.lastName)
            .setCreatedAt(new Date(json.createdAt))
            .setCreatedBy(json.createdBy)
            .setModifiedAt(new Date(json.modifiedAt))
            .setModifiedBy(json.modifiedBy)
            .build();
    }
}

export class UserBuilder {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public createdAt!: Date;
    public createdBy!: string;
    public modifiedAt!: Date;
    public modifiedBy!: string;

    setId(id: string): UserBuilder {
        this.id = id;
        return this;
    }
    setFirstName(firstName: string): UserBuilder {
        this.firstName = firstName;
        return this;
    }
    setLastName(lastName: string): UserBuilder {
        this.lastName = lastName;
        return this;
    }
    setCreatedAt(createdAt: Date): UserBuilder {
        this.createdAt = createdAt;
        return this;
    }
    setCreatedBy(createdBy: string): UserBuilder {
        this.createdBy = createdBy;
        return this;
    }
    setModifiedAt(modifiedAt: Date): UserBuilder {
        this.modifiedAt = modifiedAt;
        return this;
    }
    setModifiedBy(modifiedBy: string): UserBuilder {
        this.modifiedBy = modifiedBy;
        return this;
    }

    build(): User {
        let newUser = new User(this);
        newUser.validate();
        return newUser; 
    }
}
