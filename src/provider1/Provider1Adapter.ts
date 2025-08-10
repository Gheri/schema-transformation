import { InValidUserError } from "../errors/AppError";
import { User, UserBuilder } from "../internal/models/User";
import { IProviderAdapter } from "../IProviderAdapter";
import {User as Provider1UserModel} from "./models/User";
import {UserBuilder as Provider1UserModelBuilder} from "./models/User";

export class Provider1Adapter implements IProviderAdapter {
    convertUserModelToProvider(user: User): Provider1UserModel {
        if(!user) {
            throw new InValidUserError(`Internal User is invalid`)
        }
        user.validate();

        let provider1UserModel = new Provider1UserModelBuilder()
        .setFirstName(user.firstName)
        .setLastName(user.lastName)
        .setCreatedAt(user.createdAt)
        .setCreatedBy(user.createdBy)
        .setUpdatedAt(user.modifiedAt)
        .setUpdatedBy(user.modifiedBy)
        .setId(user.id)
        .build()

        return provider1UserModel;
        
    }
    convertProviderToUserModel(user: Provider1UserModel): User {
        if(!user) {
            throw new InValidUserError(`Internal User is invalid`)
        }
        user.validate();

        let userModel = new UserBuilder()
        .setFirstName(user.firstName)
        .setLastName(user.lastName)
        .setCreatedAt(user.createdAt)
        .setCreatedBy(user.createdBy)
        .setModifiedAt(user.updatedAt)
        .setModifiedBy(user.updatedBy)
        .setId(user.id)
        .build()

        return userModel;
    }

}