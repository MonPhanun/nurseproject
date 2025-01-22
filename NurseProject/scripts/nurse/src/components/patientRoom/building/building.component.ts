import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { DressingProviderService } from "../../../services/dressingProvider.service";
import { RegisterVM } from "../roomRegister/registerVM";

export @Component({
    selector: 'building-component',
    templateUrl: '../../../templates/nurse/patientRoom/building/index.html',
    styleUrl: '../../../templates/nurse/patientRoom/building/styles.less',
})
class BuildingComponent implements OnInit {

    private router: Router = inject(Router);
    private dressingService: DressingProviderService = inject(DressingProviderService);
    isFilter = false;
    isAdd = false;

    room: String[] = ["Emergency Building", "General Building", "Staff Building", "Heart Building","Blood Building"]
    rooms: String[] = ["Emergency", "General", "Surgery", "Heart", "Diabetes"]
    constructor() { }

    ngOnInit(): void {
    }

    dressingData: Array<RegisterVM> = new Array<RegisterVM>()


    onSave(data: RegisterVM) {
        if (data.isValid()) {
            this.dressingData.push(data)
            this.dressingService.createDressing(data);
            this.router.navigate(['/home/request'])
        }
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

    onBuildingType() {
        this.router.navigate(['/home/buildingType'])
    }

}