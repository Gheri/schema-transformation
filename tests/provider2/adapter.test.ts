import { Provider2Adapter } from "../../src/provider2/Provider2Adapter";
import { User } from "../../src/internal/models/User";
import { User as Provider2User } from "../../src/provider2/models/User";

describe('Provider2Adapter', () => {
    let adapter: Provider2Adapter;

    beforeEach(() => {
        adapter = new Provider2Adapter();
    });

    it('Convert Internal User Model to Provider 2 User Model', () => {

        const internalUserData = {
            id: 'user-123',
            firstName: 'John',
            lastName: 'Doe',
            createdBy: 'GHeri',
            modifiedBy: 'Gheri',
            createdAt: new Date('2023-01-01'),
            modifiedAt: new Date('2023-01-02')
        };
        let internalUserModel = User.fromJSON(internalUserData);


        let provider2UserModel = adapter.convertUserModelToProvider(internalUserModel);


        const expectedProvider2UserData = {
            id: 'user-123',
            fName: 'John',
            lName: 'Doe',
            createdBy: 'GHeri',
            updatedBy: 'Gheri',
            created: new Date('2023-01-01').toISOString(),
            updated: new Date('2023-01-02').toISOString()
        };
        let actualProvider2UserData = provider2UserModel.toJSON();
        expect(actualProvider2UserData).toEqual(expectedProvider2UserData);
    })

    it('Convert Provider 2 User Model to Internal User Model', () => {

        const provider2UserData = {
            id: 'user-123',
            fName: 'John',
            lName: 'Doe',
            createdBy: 'GHeri',
            updatedBy: 'Gheri',
            created: new Date('2023-01-01'),
            updated: new Date('2023-01-02')
        };
        let provider2UserModel = Provider2User.fromJSON(provider2UserData);


        let userModel = adapter.convertProviderToUserModel(provider2UserModel);

        const expectedUserData = {
            id: 'user-123',
            firstName: 'John',
            lastName: 'Doe',
            createdBy: 'GHeri',
            modifiedBy: 'Gheri',
            createdAt: new Date('2023-01-01').toISOString(),
            modifiedAt: new Date('2023-01-02').toISOString()
        };

        let actualUserData = userModel.toJSON();
        expect(actualUserData).toEqual(expectedUserData);
    })
});