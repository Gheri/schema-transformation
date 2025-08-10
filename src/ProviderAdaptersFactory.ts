import { ProviderAdapterNotFound } from "./errors/AppError";
import { IProviderAdapter } from "./IProviderAdapter";
import { Provider1Adapter } from "./provider1/Provider1Adapter";
import { Provider, Version } from "./providers";

export class ProviderAdaptersFactory {
    private mapOfAdapters: Map<string, IProviderAdapter>;
    constructor() {
       this.mapOfAdapters = new Map<string, IProviderAdapter>();

       this.mapOfAdapters.set(Provider.Provider1 + Version.Version1, new Provider1Adapter());
       this.mapOfAdapters.set(Provider.Provider2 + Version.Version1, new Provider1Adapter());
    }

    getProviderAdapter(providerName: Provider, version: Version): IProviderAdapter {
        let adapter = this.mapOfAdapters.get(providerName + version);
        if(!adapter) {
            throw new ProviderAdapterNotFound(`Adapter is not registered for ${providerName} with version: ${version}`);
        }
        return adapter;
    }
}