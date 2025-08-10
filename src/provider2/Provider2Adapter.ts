import { InValidUserError } from "../errors/AppError";
import { User, UserBuilder } from "../internal/models/User";
import { IProviderAdapter } from "../IProviderAdapter";
import { User as Provider2UserModel } from "./models/User";
import { UserBuilder as Provider2UserModelBuilder } from "./models/User";

export class Provider2Adapter implements IProviderAdapter {
    convertUserModelToProvider(user: User): Provider2UserModel {
        if (!user) {
            throw new InValidUserError(`Internal User is invalid`)
        }
        user.validate();

        let provider1UserModel = new Provider2UserModelBuilder()
            .setFName(user.firstName)
            .setLName(user.lastName)
            .setCreated(user.createdAt)
            .setCreatedBy(user.createdBy)
            .setUpdated(user.modifiedAt)
            .setUpdatedBy(user.modifiedBy)
            .setId(user.id)
            .build()

        return provider1UserModel;

    }
    convertProviderToUserModel(user: Provider2UserModel): User {
        if (!user) {
            throw new InValidUserError(`Internal User is invalid`)
        }
        user.validate();

        let userModel = new UserBuilder()
            .setFirstName(user.fName)
            .setLastName(user.lName)
            .setCreatedAt(user.created)
            .setCreatedBy(user.createdBy)
            .setModifiedAt(user.updated)
            .setModifiedBy(user.updatedBy)
            .setId(user.id)
            .build()

        return userModel;
    }

}