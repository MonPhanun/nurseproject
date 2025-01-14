import { Component, EventEmitter, Input, OnInit, Output, inject } from "@angular/core";
import { ValidationService } from "../../../services/validation.service";
import { providerVM } from "./formProviderVM";
import { Router } from "@angular/router";
import { ChoiceProviderService } from "../../../services/choiceProvider.service";



@Component({
    selector: "proform-component",
    templateUrl: '../../../templates/nurse/choiceProvider/formProvider/index.html'
})

export class providerComponent implements OnInit {

    private validator: ValidationService = inject(ValidationService);
    private router: Router = inject(Router);
    private provider: ChoiceProviderService = inject(ChoiceProviderService);

    ngOnInit(): void {
        this.mockProvider = this.provider.getProvider();
    }

    oldValue: providerVM = new providerVM()
    values: providerVM = new providerVM()
    mockProvider: Array<providerVM> = []

    @Output("onSave")
    onSave: EventEmitter<providerVM> = new EventEmitter<providerVM>()

    Save() {
        if (this.Validator() && this.values.isValid()) {
            this.onSave.emit(this.values);
            this.router.navigate(['/home/dressing']);
        } else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }
    }

    Cancel() {

    }

    errMsSupplier = '';
    errMsLocation= '';

    Validator() {

        this.errMsSupplier = this.validator.ValidateStringLength(this.values.supplier, 30, "Supplier is required !", "Invalid supplier !", "Supplier is too long !");
        this.errMsLocation = this.validator.ValidateStringNumberLength(this.values.location, 50, "Location is required !", "Invalid Location !","Location is too long !");

        return this.errMsSupplier == '' && this.errMsLocation == '';
    }

}
