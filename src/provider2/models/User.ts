import { BaseModel, validateRequired } from "../../BaseModel";

export class User implements BaseModel {
    public id!: string;
    public fName!: string;
    public lName!: string;
    public created!: Date;
    public createdBy!: string;
    public updated!: Date;
    public updatedBy!: string;

    constructor(builder: UserBuilder) {
        this.id = builder.id;
        this.fName = builder.fName;
        this.lName = builder.lName;
        this.created = builder.created;
        this.createdBy = builder.createdBy;
        this.updated = builder.updated;
        this.updatedBy = builder.updatedBy;
    }

    validate(): void {
        validateRequired(this.id, 'id');
        validateRequired(this.fName, 'fName');
        validateRequired(this.lName, 'lName');
        validateRequired(this.created, 'created');
        validateRequired(this.createdBy, 'createdBy');
        validateRequired(this.updated, 'updated');
        validateRequired(this.updatedBy, 'updatedBy');
    }

    toJSON(): Record<string, any> {
        return {
            id: this.id,
            fName: this.fName,
            lName: this.lName,
            created: this.created.toISOString(),
            createdBy: this.createdBy,
            updated: this.updated.toISOString(),
            updatedBy: this.updatedBy
        };
    }

    static fromJSON(json: any): User {
        return new UserBuilder()
            .setId(json.id)
            .setFName(json.fName)
            .setLName(json.lName)
            .setCreated(new Date(json.created))
            .setCreatedBy(json.createdBy)
            .setUpdated(new Date(json.updated))
            .setUpdatedBy(json.updatedBy)
            .build();
    }

}

export class UserBuilder {
    public id!: string;
    public fName!: string;
    public lName!: string;
    public created!: Date;
    public createdBy!: string;
    public updated!: Date;
    public updatedBy!: string;

    setId(id: string): UserBuilder {
        this.id = id;
        return this;
    }

    setFName(fName: string): UserBuilder {
        this.fName = fName;
        return this;
    }

    setLName(lName: string): UserBuilder {
        this.lName = lName;
        return this;
    }

    setCreated(created: Date): UserBuilder {
        this.created = created;
        return this;
    }

    setCreatedBy(createdBy: string): UserBuilder {
        this.createdBy = createdBy;
        return this;
    }

    setUpdated(updated: Date): UserBuilder {
        this.updated = updated;
        return this;
    }

    setUpdatedBy(updatedBy: string): UserBuilder {
        this.updatedBy = updatedBy;
        return this;
    }

    build(): User {
        let newUser = new User(this);
        newUser.validate();
        return newUser;
    }
}
