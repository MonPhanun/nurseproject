import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";
import { RegisterVM } from "../roomRegister/registerVM";

export @Component({
    selector: 'building-component',
    templateUrl: '../../../templates/nurse/patientRoom/buildingType/index.html',
    styleUrl: '../../../templates/nurse/patientRoom/buildingType/styles.less',
})
class BuildingTyleComponent implements OnInit {

    private router: Router = inject(Router);
    private dressingService: DressingProviderService = inject(DressingProviderService);
    isFilter = false;
    isAdd = false;

    room: String[] = ["Patient", "Room", "Bed", "Room Free"]
    constructor() { }

    ngOnInit(): void {
    }

    dressingData: Array<RegisterVM> = new Array<RegisterVM>()


    onSave(data: RegisterVM) {
    
    }

    onFilter() {
        this.isFilter = !this.isFilter;
    }

    onAdd() {
        this.isAdd = true;
    }

    onCancel(cancel: boolean) {
        this.isAdd = cancel

    }


}