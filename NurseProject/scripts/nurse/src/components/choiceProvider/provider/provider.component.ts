import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

import { providerVM } from "../formProvider/formProviderVM";
import { ChoiceProviderService } from "../../../services/choiceProvider.service";

export @Component({
    selector: 'provider-component',
    templateUrl: '../../../templates/nurse/choiceProvider/provider/index.html',
})
class ProviderComponent implements OnInit {
    private route: Router = inject(Router);
    private provider: ChoiceProviderService = inject(ChoiceProviderService);

    constructor() { }

    ngOnInit(): void {
        this.getEmbell()
    }

    providerData: Array<providerVM> = new Array<providerVM>()

    getEmbell() {
        //this.NameData = this.embellService.getEmbellName();
    }


    onSave(data: providerVM) {
        if (data.isValid()) {
            this.providerData.push(data)
            this.provider.createProvider(data);
        }

    }
}