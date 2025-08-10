import { Provider1Adapter } from "../../src/provider1/Provider1Adapter";
import { User } from "../../src/internal/models/User";
import { User as Provider1User } from "../../src/provider1/models/User";

describe('Provider1Adapter', () => {
    let adapter: Provider1Adapter;

    beforeEach(() => {
        adapter = new Provider1Adapter();
    });

    it('Convert Internal User Model to Provider 1 User Model', () => {
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

        let provider1UserModel = adapter.convertUserModelToProvider(internalUserModel);

        const expectedProvider1UserData = {
            id: 'user-123',
            firstName: 'John',
            lastName: 'Doe',
            createdBy: 'GHeri',
            updatedBy: 'Gheri',
            createdAt: new Date('2023-01-01').toISOString(),
            updatedAt: new Date('2023-01-02').toISOString()
        };
        let actualProvider1UserData = provider1UserModel.toJSON();
        expect(actualProvider1UserData).toEqual(expectedProvider1UserData);
    })

    it('Convert Provider 1 User Model to Internal User Model', () => {
        const provider1UserData = {
            id: 'user-123',
            firstName: 'John',
            lastName: 'Doe',
            createdBy: 'GHeri',
            updatedBy: 'Gheri',
            createdAt: new Date('2023-01-01'),
            updatedAt: new Date('2023-01-02')
        };
        let provider1UserModel = Provider1User.fromJSON(provider1UserData);

        let userModel = adapter.convertProviderToUserModel(provider1UserModel);

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