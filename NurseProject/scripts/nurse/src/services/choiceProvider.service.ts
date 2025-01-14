import { Injectable } from "@angular/core";
import { providerVM } from "../components/choiceProvider/formProvider/formProviderVM";


@Injectable({ providedIn: 'root' })
export class ChoiceProviderService {

    storeProvider: Array<providerVM> = []

    mockProvider() {
        var mock = new Array<providerVM>();
        mock = [{ supplier: 'Rotha Somangka', location: "Phnom Penh" } as providerVM,
        { supplier: 'Rachana Somangka', location: "Phnom Penh" } as providerVM,
        { supplier: 'Monika Somangka', location: "Phnom Penh" } as providerVM,
        { supplier: 'Chackrya Somangka', location: "Phnom Penh" } as providerVM,]
        return mock;
    }

    getProvider() {
        this.storeProvider = this.mockProvider();
        return this.storeProvider;
    }

    createProvider(data: providerVM) {
        if (data.isValid()) {
            this.storeProvider.push(data)
        }
    }

    editProvider(data: providerVM[]) {
        if (data.length > 0) {
            this.storeProvider = this.storeProvider.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteProvider(data: providerVM) {
        if (data.isValid()) {
            this.storeProvider = this.storeProvider.filter(e => e !=data)
        }
    }
}