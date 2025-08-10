import { BaseModel, validateRequired } from "../../BaseModel";

export class User implements BaseModel {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public createdAt!: Date;
    public createdBy!: string;
    public updatedAt!: Date;
    public updatedBy!: string;

    constructor(builder: UserBuilder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.createdAt = builder.createdAt;
        this.createdBy = builder.createdBy;
        this.updatedAt = builder.updatedAt;
        this.updatedBy = builder.updatedBy;
    }

    validate(): void {
        validateRequired(this.id, 'id');
        validateRequired(this.firstName, 'firstName');
        validateRequired(this.lastName, 'lastName');
        validateRequired(this.createdAt, 'createdAt');
        validateRequired(this.createdBy, 'createdBy');
        validateRequired(this.updatedAt, 'updatedAt');
        validateRequired(this.updatedBy, 'updatedBy');
    }

    toJSON(): Record<string, any> {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            createdAt: this.createdAt.toISOString(),
            createdBy: this.createdBy,
            updatedAt: this.updatedAt.toISOString(),
            updatedBy: this.updatedBy
        };
    }

    static fromJSON(json: any): User {
        return new UserBuilder()
            .setId(json.id)
            .setFirstName(json.firstName)
            .setLastName(json.lastName)
            .setCreatedAt(new Date(json.createdAt))
            .setCreatedBy(json.createdBy)
            .setUpdatedAt(new Date(json.updatedAt))
            .setUpdatedBy(json.updatedBy)
            .build();
    }
}

export class UserBuilder {
    public id!: string;
    public firstName!: string;
    public lastName!: string;
    public createdAt!: Date;
    public createdBy!: string;
    public updatedAt!: Date;
    public updatedBy!: string;

    public setId(id: string): UserBuilder {
        this.id = id;
        return this;
    }

    public setFirstName(firstName: string): UserBuilder {
        this.firstName = firstName;
        return this;
    }

    public setLastName(lastName: string): UserBuilder {
        this.lastName = lastName;
        return this;
    }

    public setCreatedAt(createdAt: Date): UserBuilder {
        this.createdAt = createdAt;
        return this;
    }

    public setCreatedBy(createdBy: string): UserBuilder {
        this.createdBy = createdBy;
        return this;
    }

    public setUpdatedAt(updatedAt: Date): UserBuilder {
        this.updatedAt = updatedAt;
        return this;
    }

    public setUpdatedBy(updatedBy: string): UserBuilder {
        this.updatedBy = updatedBy;
        return this;
    }

    public build(): User {
        let newUser = new User(this);
        newUser.validate();
        return newUser;
    }
}
