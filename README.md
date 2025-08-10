# Schema Transformation Library

A TypeScript library for transforming data models between different provider schemas while maintaining data integrity and validation.

## How to Onboard New Providers

- **Implement Provider Adapter Interface**: Implement interface to define transformation logic between internal and provider-specific models.
- **Register New Adapter in AdaptersFactory**: Add New Provider Adapter in ProviderAdaptersFactory. Add New Enum for new Provider in providers.ts
- **Add New Provider Specific Models**: Add New Provider Specific Models similarly to providers/models/User.ts. Please add serailization/desreialization methods. Please add valdiation methods
- **Extensive Testing**: Please include Unit tests.

## Architecture

### Core Components

1. **IProviderAdapter Interface**: Generic interface for all provider adapters which allows to convert from internal models to provider specific models
2. **ProviderAdaptersFactory Interface**: Any Sync Service can use factory to get provider specific adapter
3. **BaseModel**: BaseModel for any contract model to be used
4. **AppError**: Custom Error Thrown from Lib
5. **Internal User Model**: The Model (for eg User) used within the org.
6. **Provider Specific Models**: The Models to be defined for provider specific.
7. **Provider Specific Adapter**: Adapter to be Defined to support provider specific models. This Adapter provides the way to convert from internal models to provider specific user models.

## Installation

```bash
npm install
```

## Usage

### Basic User Transformation

```typescript

// Create an internal user model using constructor
// similarly for provider specific model
const internalUser = new User({
        id: 'user-123',
        firstName: 'John',
        lastName: 'Doe',
        createdBy: 'GHeri',
        modifiedBy: 'Gheri',
        createdAt: new Date('2023-01-01'),
        modifiedAt: new Date('2023-01-02')
    });

// Or create using the Builder pattern
const userWithBuilder = new UserBuilder()
            .setId('123')
            .setFirstName('John')
            .setLastName('Doe')
            .setCreatedAt(new Date())
            .setCreatedBy('Gheri')
            .setModifiedAt(new Date())
            .setModifiedBy('Gheri')
            .build();

// Initialize adapters
const provider1Adapter = ProviderAdaptersFactory.getProviderAdapter(Provider1, Version1)
const provider2Adapter = ProviderAdaptersFactory.getProviderAdapter(Provider2, Version1)

provider1Adapter.convertUserModelToProvider(internalUser);
provider2Adapter.convertUserModelToProvider(internalUser);

adapter.convertProviderToUserModel(provider1UserModel);
adapter.convertProviderToUserModel(provider2UserModel);


## Development

### Building

```bash
npm run build
```

### Unit Test

Run the comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

```

## Best Practices

1. **Always serialize/desreilaize models** For New Contract Models Before define serailization and deserialization methods
2. **Handle Validations** appropriately in your application
3. **Test transformations thoroughly** including edge cases


## License

MIT License - see LICENSE file for details. 