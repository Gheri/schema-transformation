import { User } from '../../src/internal/models/User';
import { ValidationError } from '../../src/errors/AppError';

describe('User Model', () => {
    const validUserData = {
        id: 'user-123',
        firstName: 'John',
        lastName: 'Doe',
        createdBy: 'GHeri',
        modifiedBy: 'Gheri',
        createdAt: new Date('2023-01-01'),
        modifiedAt: new Date('2023-01-02')
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