import { BaseModel } from "./BaseModel";
import {User } from "./internal/models/User";

export interface IProviderAdapter {
    convertUserModelToProvider(user: User): BaseModel
    convertProviderToUserModel(user: BaseModel): User;
}