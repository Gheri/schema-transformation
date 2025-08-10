import { User } from '../../src/provider2/models/User';
import { ValidationError } from '../../src/errors/AppError';

describe('User Model', () => {
    const validUserData = {
        id: 'user-123',
        fName: 'John',
        lName: 'Doe',
        createdBy: 'GHeri',
        updatedBy: 'Gheri',
        created: new Date('2023-01-01'),
        updated: new Date('2023-01-02')
    };

    describe('Deserailization', () => {
        it('should validate a valid user', async () => {
            User.fromJSON(validUserData);
        });

        it('should require id', () => {
            expect(() => User.fromJSON({ ...validUserData, id: '' }))
                .toThrow(ValidationError);
        });

    });
}); 